const axios = require('axios');
const cheerio = require('cheerio');

module.exports = async (req, res) => {
  const { courseId, stage, semester } = req.query;
  const url = `https://rgu.akarisoftware.com/index.cfm/page/course/courseId/${courseId}/prgdeliveryperiodid/968`;

  try {
    const { data } = await axios.get(url);
    const $ = cheerio.load(data);
    
    const electiveMap = [];

    // 1. Find every link that mentions "Elective"
    $('a[href*="groupId/"]').each((i, el) => {
      const linkText = $(el).text().toLowerCase();
      const href = $(el).attr('href');

      if (linkText.includes('elective')) {
        const gId = href.match(/groupId\/(\d+)/)?.[1];

        // 2. Look "upstairs" for the Stage and Semester
        // We look at the closest table or container to find the labels
        const containerText = $(el).closest('tr').text() + " " + 
                             $(el).closest('table').prevAll('h3, h4, .group-header').first().text() + " " +
                             $(el).closest('table').find('th, td').first().text();

        const stageMatch = containerText.match(/Stage\s+(\d+)/i);
        const semMatch = containerText.match(/Semester\s+(\d+)/i);

        electiveMap.push({
          stage: stageMatch ? stageMatch[1] : "unknown",
          semester: semMatch ? semMatch[1] : "unknown",
          groupId: gId,
          rawText: linkText
        });
      }
    });

    // 3. Filter for the one you asked for
    const match = electiveMap.find(m => m.stage === stage.toString() && m.semester === semester.toString());

    if (!match) {
      return res.status(404).json({ 
        error: `No 'Elective' link found for S${stage} Sem ${semester}`,
        detectedGroups: electiveMap 
      });
    }

    // 4. Fetch the modules for the group we found
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