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

    // 1. Scan EVERY element in order
    // We look at headers and rows specifically
    $('h3, h4, .group-header, tr, th').each((i, el) => {
      const text = $(el).text().trim();

      // Update the current stage if we pass a Stage header
      const stageMatch = text.match(/Stage\s+(\d+)/i);
      if (stageMatch) {
        currentStage = stageMatch[1];
      }

      // If we find a Semester and it's within a valid stage
      if (text.toLowerCase().includes("semester") && currentStage !== "0") {
        const semMatch = text.match(/Semester\s+(\d+)/i);
        if (semMatch) {
          const semNum = semMatch[1];
          
          // Look for the groupId link: 
          // 1. Inside this element? 
          // 2. In the next table row?
          // 3. In the parent table?
          const link = $(el).find('a[href*="groupId/"]').attr('href') || 
                       $(el).next('tr').find('a[href*="groupId/"]').attr('href') ||
                       $(el).closest('tr').find('a[href*="groupId/"]').attr('href');

          if (link) {
            const gId = link.match(/groupId\/(\d+)/)?.[1];
            
            // Deduplicate: Only add if we don't have this Stage/Sem combo yet
            const exists = semesterMap.find(m => m.stage === currentStage && m.semester === semNum);
            if (!exists) {
              semesterMap.push({ stage: currentStage, semester: semNum, groupId: gId });
            }
          }
        }
      }
    });

    // 2. Match the requested Stage and Semester
    const match = semesterMap.find(m => m.stage === stage.toString() && m.semester === semester.toString());

    if (!match) {
      return res.status(404).json({ 
        error: `Could not find S${stage} Sem ${semester}.`,
        found: semesterMap.map(m => `S${m.stage}Sem${m.semester}`).join(', ')
      });
    }

    // 3. Fetch the module data from the discovered Group ID
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