const axios = require('axios');
const cheerio = require('cheerio');

async function scrapeElectiveGroup(groupId, stage, semester) {
  try {
    const url = `https://rgu.akarisoftware.com/index.cfm/page/group/groupId/${groupId}`;
    const { data } = await axios.get(url);
    const $ = cheerio.load(data);
    const modules = [];
    $('table tr').each((i, row) => {
      const cells = $(row).find('td');
      if (cells.length >= 2) {
        const code = $(cells[0]).text().trim().replace(/[^A-Z0-9]/g, '');
        const titleRaw = $(cells[1]).text().trim();
        const title = titleRaw.split(/Requisites|Prerequisite|\n\n/)[0].trim();
        if (/^[A-Z]{2}\d{4}$/.test(code)) {
          modules.push({ code, title, stage, semester, isElective: true });
        }
      }
    });
    return modules;
  } catch (e) { return []; }
}

module.exports = async (req, res) => {
  const { courseId } = req.query;
  const targetUrl = courseId.includes('prgdelivery') 
    ? `https://rgu.akarisoftware.com/index.cfm/page/course/courseId/${courseId}`
    : `https://rgu.akarisoftware.com/index.cfm/page/course/courseId/${courseId}/prgdeliveryperiodid/968`;

  try {
    const { data } = await axios.get(targetUrl);
    const $ = cheerio.load(data);
    
    // 1. Find the best container to search in
    let container = $('#courseSchedules'); // Try CS layout first
    if (container.length === 0) {
      container = $('h2:contains("Course Schedules")').parent(); // Try header-based search
    }
    if (container.length === 0) {
      container = $('body'); // Fallback to whole page for older layouts (Cyber/Games)
    }

    let allModules = [];
    let currentStage = "Stage 1";
    let currentSemester = "Semester 1";

    // 2. Scan the container for headers and module rows
    container.find('th, td, h3, h4, tr').each((i, el) => {
      const text = $(el).text().trim();

      // Update context ONLY if we find a clear Stage/Semester marker
      if (/Stage \d/.test(text)) currentStage = text.match(/Stage \d/)[0];
      if (/Semester \d/.test(text)) currentSemester = text.match(/Semester \d/)[0];

      if ($(el).is('tr')) {
        const cells = $(el).find('td');
        if (cells.length >= 2) {
          const code = $(cells[0]).text().trim().replace(/[^A-Z0-9]/g, '');
          
          if (/^[A-Z]{2}\d{4}$/.test(code)) {
            const titleRaw = $(cells[1]).text().trim();
            const title = titleRaw.split(/Requisites|Prerequisite|\n\n/)[0].trim();
            allModules.push({ code, title, stage: currentStage, semester: currentSemester, isElective: false });
          }

          const groupLink = $(el).find('a[href*="groupId/"]').attr('href');
          if (groupLink) {
            const groupId = groupLink.match(/groupId\/(\d+)/)?.[1];
            if (groupId) {
              allModules.push({ type: 'pending', id: groupId, stage: currentStage, semester: currentSemester });
            }
          }
        }
      }
    });

    // 3. Resolve Electives and Deduplicate
    const finalModuleList = [];
    for (const item of allModules) {
      if (item.type === 'pending') {
        const electives = await scrapeElectiveGroup(item.id, item.stage, item.semester);
        finalModuleList.push(...electives);
      } else {
        finalModuleList.push(item);
      }
    }

    // Use a composite key to prevent the "Double Scraping" issue
    const uniqueMap = new Map();
    finalModuleList.forEach(m => {
      const key = `${m.code}-${m.stage}-${m.semester}`;
      if (!uniqueMap.has(key)) uniqueMap.set(key, m);
    });

    res.status(200).json({
      course: $('h2').first().text().trim(),
      modules: Array.from(uniqueMap.values())
    });

  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};