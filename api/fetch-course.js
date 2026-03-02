const axios = require('axios');
const cheerio = require('cheerio');

async function scrapeElectiveGroup(groupId, stage, semester) {
  try {
    const { data } = await axios.get(`https://rgu.akarisoftware.com/index.cfm/page/group/groupId/${groupId}`);
    const $ = cheerio.load(data);
    const electiveModules = [];

    $('table tr').each((i, row) => {
      const cells = $(row).find('td');
      const code = $(cells[0]).text().trim();
      
      // CLEAN TITLE LOGIC HERE
      const titleRaw = $(cells[1]).text().trim();
      const title = titleRaw.split(/Requisites|Prerequisite|\n\n/)[0].trim();

      if (/^[A-Z]{2}\d{4}$/.test(code)) {
        electiveModules.push({ code, title, stage, semester, isElective: true });
      }
    });
    return electiveModules;
  } catch (e) { return []; }
}

module.exports = async (req, res) => {
  const { courseId } = req.query;
  const url = `https://rgu.akarisoftware.com/index.cfm/page/course/courseId/${courseId}`;

  try {
    const { data } = await axios.get(url);
    const $ = cheerio.load(data);
    let allModules = [];
    let currentStage = "Stage 1"; 
    let currentSemester = "Semester 1";

    const rows = $('table tr').toArray();

    for (const row of rows) {
      const rowText = $(row).text().trim();

      if (rowText.includes('Stage')) {
        const stageMatch = rowText.match(/Stage \d/);
        if (stageMatch) currentStage = stageMatch[0];
      }
      if (rowText.includes('Semester')) {
        const semMatch = rowText.match(/Semester \d/);
        if (semMatch) currentSemester = semMatch[0];
      }

      const cells = $(row).find('td');
      const code = $(cells[0]).text().trim();
      
      // CLEAN TITLE LOGIC HERE
      const titleRaw = $(cells[1]).text().trim();
      const title = titleRaw.split(/Requisites|Prerequisite|\n\n/)[0].trim();

      if (/^[A-Z]{2}\d{4}$/.test(code)) {
        allModules.push({ code, title, stage: currentStage, semester: currentSemester, isElective: false });
      }

      const groupLink = $(row).find('a[href*="groupId/"]').attr('href');
      if (groupLink) {
        const groupId = groupLink.match(/groupId\/(\d+)/)?.[1];
        if (groupId) {
          const electives = await scrapeElectiveGroup(groupId, currentStage, currentSemester);
          allModules = [...allModules, ...electives];
        }
      }
    }

    // Deduplicate
    const seen = new Set();
    const finalModules = allModules.filter(m => {
      const key = `${m.code}-${m.stage}-${m.semester}`;
      if (seen.has(key)) return false;
      seen.add(key);
      return true;
    });

    res.status(200).json({ course: $('h2').text().trim(), modules: finalModules });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};