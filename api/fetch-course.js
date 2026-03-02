const axios = require('axios');
const cheerio = require('cheerio');

async function scrapeGroup(groupId, stage, semester) {
  try {
    const { data } = await axios.get(`https://rgu.akarisoftware.com/index.cfm/page/group/groupId/${groupId}`);
    const $ = cheerio.load(data);
    const modules = [];
    $('table tr').each((i, row) => {
      const cells = $(row).find('td');
      const code = $(cells[0]).text().trim();
      const titleRaw = $(cells[1]).text().trim();
      const title = titleRaw.split(/Requisites|Prerequisite|\n\n/)[0].trim();
      if (/^[A-Z]{2}\d{4}$/.test(code)) {
        modules.push({ code, title, stage, semester, isElective: true });
      }
    });
    return modules;
  } catch (e) { return []; }
}

module.exports = async (req, res) => {
  const { courseId } = req.query;
  // Note: We use the full URL including the delivery period if provided, or just the ID
  const url = courseId.includes('prgdelivery') 
    ? `https://rgu.akarisoftware.com/index.cfm/page/course/courseId/${courseId}`
    : `https://rgu.akarisoftware.com/index.cfm/page/course/courseId/${courseId}/prgdeliveryperiodid/968`;

  try {
    const { data } = await axios.get(url);
    const $ = cheerio.load(data);
    let allModules = [];
    let currentStage = "Stage 1";
    let currentSemester = "Semester 1";

    // This targets the specific "Course Schedules" headers found in 6664
    $('th, td, h3, h4, .group-header').each((i, el) => {
      const text = $(el).text().trim();
      
      // Update Stage/Semester context
      if (text.includes('Stage')) {
        const match = text.match(/Stage \d/);
        if (match) currentStage = match[0];
      }
      if (text.includes('Semester')) {
        const match = text.match(/Semester \d/);
        if (match) currentSemester = match[0];
      }

      // If this element contains a table of modules
      const table = $(el).next('table').length ? $(el).next('table') : $(el).find('table');
      
      table.find('tr').each((j, row) => {
        const cells = $(row).find('td');
        const code = $(cells[0]).text().trim().replace(/[^A-Z0-9]/g, ''); // Clean hidden chars
        
        // 1. Core Module Match
        if (/^[A-Z]{2}\d{4}$/.test(code)) {
          const titleRaw = $(cells[1]).text().trim();
          const title = titleRaw.split(/Requisites|Prerequisite|\n\n/)[0].trim();
          allModules.push({ code, title, stage: currentStage, semester: currentSemester, isElective: false });
        }

        // 2. Elective Group Match
        const groupLink = $(row).find('a[href*="groupId/"]').attr('href');
        if (groupLink) {
          const groupId = groupLink.match(/groupId\/(\d+)/)?.[1];
          // We'll mark these for a follow-up fetch
          allModules.push({ type: 'group-request', id: groupId, stage: currentStage, semester: currentSemester });
        }
      });
    });

    // Resolve Elective Groups
    const finalModules = [];
    for (const item of allModules) {
      if (item.type === 'group-request') {
        const electives = await scrapeGroup(item.id, item.stage, item.semester);
        finalModules.push(...electives);
      } else {
        finalModules.push(item);
      }
    }

    // Deduplicate
    const seen = new Set();
    const unique = finalModules.filter(m => {
      const key = `${m.code}-${m.stage}-${m.semester}`;
      if (seen.has(key)) return false;
      seen.add(key);
      return true;
    });

    res.status(200).json({ course: $('h2').text().trim(), modules: unique });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};