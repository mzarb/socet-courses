const axios = require('axios');
const cheerio = require('cheerio');

module.exports = async (req, res) => {
  const { courseId, stage, semester } = req.query;
  const url = `https://rgu.akarisoftware.com/index.cfm/page/course/courseId/${courseId}/prgdeliveryperiodid/968`;

  try {
    const { data } = await axios.get(url);
    const $ = cheerio.load(data);
    
    const semesterMap = [];
    let currentStage = 1;

    // 1. Scan every table row on the page
    $('tr').each((i, row) => {
      const text = $(row).text().trim();

      // Track which Stage we are currently in as we scroll down
      const stageMatch = text.match(/Stage (\d)/i);
      if (stageMatch) currentStage = stageMatch[1];

      // If this row contains "Semester X" AND has a groupId link
      if (text.toLowerCase().includes("semester")) {
        const semMatch = text.match(/Semester (\d)/i);
        const link = $(row).find('a[href*="groupId/"]').attr('href') || 
                     $(row).next('tr').find('a[href*="groupId/"]').attr('href');

        if (semMatch && link) {
          semesterMap.push({
            stage: currentStage.toString(),
            semester: semMatch[1],
            groupId: link.match(/groupId\/(\d+)/)?.[1]
          });
        }
      }
    });

    // 2. Find the specific match from our list
    const match = semesterMap.find(m => m.stage === stage && m.semester === semester);

    if (!match) {
      return res.status(404).json({ 
        error: `Not found. Available semesters: ${semesterMap.map(m => `S${m.stage}Sem${m.semester}`).join(', ')}` 
      });
    }

    // 3. Standard fetch for the modules
    const gRes = await axios.get(`https://rgu.akarisoftware.com/index.cfm/page/group/groupId/${match.groupId}`);
    const g$ = cheerio.load(gRes.data);
    const modules = [];

    g$('table tr').each((j, row) => {
      const cells = g$(row).find('td');
      if (cells.length >= 2) {
        const code = g$(cells[0]).text().trim().replace(/[^A-Z0-9]/g, '');
        const title = g$(cells[1]).text().split(/Requisites|Prerequisite|\n\n/)[0].trim();
        if (/^[A-Z]{2}\d{4}$/.test(code)) {
          modules.push({ code, title });
        }
      }
    });

    res.status(200).json({ 
      stage: match.stage, 
      semester: match.semester, 
      groupId: match.groupId, 
      modules 
    });

  } catch (e) {
    res.status(500).json({ error: e.message });
  }
};