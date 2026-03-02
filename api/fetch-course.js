const axios = require('axios');
const cheerio = require('cheerio');

// Helper to scrape those sub-pages (Elective Groups)
async function scrapeElectiveGroup(groupId, stage, semester) {
  try {
    const url = `https://rgu.akarisoftware.com/index.cfm/page/group/groupId/${groupId}`;
    const { data } = await axios.get(url);
    const $ = cheerio.load(data);
    const electiveModules = [];

    $('table tr').each((i, row) => {
      const cells = $(row).find('td');
      if (cells.length >= 2) {
        const code = $(cells[0]).text().trim().replace(/[^A-Z0-9]/g, '');
        const titleRaw = $(cells[1]).text().trim();
        
        // Clean Title: Remove "Requisites", "Prerequisites", and double newlines
        const title = titleRaw.split(/Requisites|Prerequisite|\n\n/)[0].trim();

        if (/^[A-Z]{2}\d{4}$/.test(code)) {
          electiveModules.push({ code, title, stage, semester, isElective: true });
        }
      }
    });
    return electiveModules;
  } catch (e) { return []; }
}

module.exports = async (req, res) => {
  const { courseId } = req.query;
  
  // Ensure we use the 2025 delivery period for Computer Science if not specified
  const targetUrl = courseId.includes('prgdelivery') 
    ? `https://rgu.akarisoftware.com/index.cfm/page/course/courseId/${courseId}`
    : `https://rgu.akarisoftware.com/index.cfm/page/course/courseId/${courseId}/prgdeliveryperiodid/968`;

  try {
    const { data } = await axios.get(targetUrl);
    const $ = cheerio.load(data);
    let allModules = [];
    
    // Sticky variables to track current location in the curriculum
    let currentStage = "Stage 1"; 
    let currentSemester = "Semester 1";

    // 1. Traverse the page to find Headers and Tables
    $('th, td, h3, h4, .group-header').each((i, el) => {
      const text = $(el).text().trim();

      // Update Stage context
      if (/Stage \d/.test(text)) {
        currentStage = text.match(/Stage \d/)[0];
        currentSemester = "Semester 1"; // Reset semester when entering a new stage
      }
      
      // Update Semester context
      if (/Semester \d/.test(text)) {
        currentSemester = text.match(/Semester \d/)[0];
      }

      // Check for tables immediately following or inside this element
      const table = $(el).next('table').length ? $(el).next('table') : $(el).closest('table');
      
      table.find('tr').each((j, row) => {
        const cells = $(row).find('td');
        const code = $(cells[0]).text().trim().replace(/[^A-Z0-9]/g, '');

        // Match Core Modules
        if (/^[A-Z]{2}\d{4}$/.test(code)) {
          const titleRaw = $(cells[1]).text().trim();
          const title = titleRaw.split(/Requisites|Prerequisite|\n\n/)[0].trim();
          allModules.push({ 
            code, 
            title, 
            stage: currentStage, 
            semester: currentSemester, 
            isElective: false 
          });
        }

        // Identify Elective Groups to fetch later
        const groupLink = $(row).find('a[href*="groupId/"]').attr('href');
        if (groupLink) {
          const groupId = groupLink.match(/groupId\/(\d+)/)?.[1];
          if (groupId) {
            allModules.push({ 
              type: 'pending-elective', 
              id: groupId, 
              stage: currentStage, 
              semester: currentSemester 
            });
          }
        }
      });
    });

    // 2. Resolve Elective Groups
    const finalModuleList = [];
    for (const item of allModules) {
      if (item.type === 'pending-elective') {
        const electives = await scrapeElectiveGroup(item.id, item.stage, item.semester);
        finalModuleList.push(...electives);
      } else {
        finalModuleList.push(item);
      }
    }

    // 3. Strict Deduplication
    // We use a Map keyed by the Module Code to ensure each module appears only once
    const uniqueMap = new Map();
    finalModuleList.forEach(m => {
      if (!uniqueMap.has(m.code)) {
        uniqueMap.set(m.code, m);
      }
    });

    const cleanedModules = Array.from(uniqueMap.values());

    res.status(200).json({
      course: $('h2').text().trim(),
      lastUpdated: new Date().toISOString(),
      modules: cleanedModules
    });

  } catch (error) {
    res.status(500).json({ error: "Scraping failed", details: error.message });
  }
};