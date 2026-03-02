const axios = require('axios');
const cheerio = require('cheerio');

module.exports = async (req, res) => {
  const { courseId, stage, semester } = req.query;
  const url = `https://rgu.akarisoftware.com/index.cfm/page/course/courseId/${courseId}/prgdeliveryperiodid/968`;

  try {
    const { data } = await axios.get(url);
    const $ = cheerio.load(data);
    let foundGroupId = null;
    let lastSeenStage = null;

    // Walk through every header and table cell in order
    $('th, td, h3, h4, .group-header').each((i, el) => {
      const text = $(el).text().trim();

      // Update the "Last Seen Stage"
      if (text.toLowerCase().includes(`stage ${stage}`)) {
        lastSeenStage = stage;
      }

      // If we are in the correct Stage, look for the Semester
      if (lastSeenStage === stage && text.toLowerCase().includes(`semester ${semester}`)) {
        // Find the first groupId link in the table immediately following this text
        const link = $(el).closest('table').find('a[href*="groupId/"]').attr('href') || 
                     $(el).nextAll('table').first().find('a[href*="groupId/"]').attr('href');
        
        if (link) {
          foundGroupId = link.match(/groupId\/(\d+)/)?.[1];
          return false; // Found it! Break the loop
        }
      }
    });

    if (!foundGroupId) {
      return res.status(404).json({ error: `Could not find link for Stage ${stage} Sem ${semester}` });
    }

    // Fetch the group data
    const gRes = await axios.get(`https://rgu.akarisoftware.com/index.cfm/page/group/groupId/${foundGroupId}`);
    const g$ = cheerio.load(gRes.data);
    const modules = [];

    g$('table tr').each((i, row) => {
      const cells = g$(row).find('td');
      if (cells.length >= 2) {
        const code = g$(cells[0]).text().trim().replace(/[^A-Z0-9]/g, '');
        const title = g$(cells[1]).text().split(/Requisites|Prerequisite|\n\n/)[0].trim();
        if (/^[A-Z]{2}\d{4}$/.test(code)) {
          modules.push({ code, title });
        }
      }
    });

    res.status(200).json({ stage, semester, groupId: foundGroupId, modules });

  } catch (e) {
    res.status(500).json({ error: e.message });
  }
};