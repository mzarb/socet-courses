const axios = require('axios');
const cheerio = require('cheerio');

module.exports = async (req, res) => {
  const { courseId, stage, semester } = req.query;
  const url = `https://rgu.akarisoftware.com/index.cfm/page/course/courseId/${courseId}/prgdeliveryperiodid/968`;

  try {
    const { data } = await axios.get(url);
    const $ = cheerio.load(data);
    let foundGroupId = null;
    let insideCorrectStage = false;

    // We iterate through headers and tables
    $('h3, h4, th, td, .group-header').each((i, el) => {
      const text = $(el).text().trim().toLowerCase();

      // 1. Check if we've entered the requested Stage
      // We use a regex to ensure "Stage 3" doesn't match "Stage 13"
      const stageRegex = new RegExp(`stage\\s${stage}(?!\\d)`, 'i');
      if (stageRegex.test(text)) {
        insideCorrectStage = true;
      }

      // 2. If we see a DIFFERENT stage header, turn the gatekeeper OFF
      // this prevents Stage 3 from looking into Stage 4's tables
      if (insideCorrectStage && /stage\s\d/i.test(text) && !stageRegex.test(text)) {
        // Only turn off if it's a main header, not a tiny cell
        if ($(el).is('h3, h4, .group-header')) insideCorrectStage = false;
      }

      // 3. If we are inside the right Stage, find the correct Semester
      if (insideCorrectStage && text.includes(`semester ${semester}`)) {
        // Look for the link in the immediate vicinity
        const link = $(el).closest('table').find('a[href*="groupId/"]').attr('href') || 
                     $(el).nextAll('table').first().find('a[href*="groupId/"]').attr('href');
        
        if (link) {
          foundGroupId = link.match(/groupId\/(\d+)/)?.[1];
          return false; // Success! Break the each loop
        }
      }
    });

    if (!foundGroupId) {
      return res.status(404).json({ error: `Not found: Stage ${stage} Sem ${semester}` });
    }

    // Standard group fetch logic
    const gRes = await axios.get(`https://rgu.akarisoftware.com/index.cfm/page/group/groupId/${foundGroupId}`);
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

    res.status(200).json({ stage, semester, groupId: foundGroupId, modules });

  } catch (e) {
    res.status(500).json({ error: e.message });
  }
};