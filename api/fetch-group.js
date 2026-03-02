const axios = require('axios');
const cheerio = require('cheerio');

module.exports = async (req, res) => {
  const { courseId, stage, semester } = req.query;
  const url = `https://rgu.akarisoftware.com/index.cfm/page/course/courseId/${courseId}/prgdeliveryperiodid/968`;

  try {
    const { data } = await axios.get(url);
    const $ = cheerio.load(data);
    
    const semesterMap = [];
    let currentStage = "0";

    // Scan every row, header, and div in the order they appear
    $('tr, h3, h4, .group-header').each((i, el) => {
      const text = $(el).text().trim();

      // 1. Update the Stage context whenever we pass a Stage header
      const stageMatch = text.match(/Stage\s+(\d+)/i);
      if (stageMatch) {
        currentStage = stageMatch[1];
      }

      // 2. If we find "Semester X" in this element (or its children)
      if (text.toLowerCase().includes("semester")) {
        const semMatch = text.match(/Semester\s+(\d+)/i);
        const link = $(el).find('a[href*="groupId/"]').attr('href') || 
                     $(el).next('tr').find('a[href*="groupId/"]').attr('href');

        if (semMatch && link) {
          const gId = link.match(/groupId\/(\d+)/)?.[1];
          // Only add if we don't already have this Stage/Sem combo
          const exists = semesterMap.find(m => m.stage === currentStage && m.semester === semMatch[1]);
          if (!exists) {
            semesterMap.push({
              stage: currentStage,
              semester: semMatch[1],
              groupId: gId
            });
          }
        }
      }
    });

    // 3. Find the specific match
    const match = semesterMap.find(m => m.stage === stage.toString() && m.semester === semester.toString());

    if (!match) {
      return res.status(404).json({ 
        error: `Not found. Found: ${semesterMap.map(m => `S${m.stage}Sem${m.semester}`).join(', ')}` 
      });
    }

    // 4. Fetch the module data
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

    res.status(200).json({ ...match, modules });

  } catch (e) {
    res.status(500).json({ error: e.message });
  }
};