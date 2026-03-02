const axios = require('axios');
const cheerio = require('cheerio');

module.exports = async (req, res) => {
  const { courseId, stage, semester } = req.query;
  const url = `https://rgu.akarisoftware.com/index.cfm/page/course/courseId/${courseId}/prgdeliveryperiodid/968`;

  try {
    const { data } = await axios.get(url);
    const $ = cheerio.load(data);
    let foundGroupId = null;

    // 1. Find the specific header that matches BOTH Stage and Semester
    // We use a filter to ensure we get the exact heading for that section
    const targetHeader = $('th, td, h3, h4, .group-header').filter((i, el) => {
      const txt = $(el).text().toLowerCase();
      return txt.includes(`stage ${stage}`) && txt.includes(`semester ${semester}`);
    }).first();

    if (targetHeader.length > 0) {
      // 2. Look at the tables that come AFTER this specific header
      // This prevents us from accidentally grabbing the Stage 1 table when looking for Stage 2
      const associatedTable = targetHeader.nextAll('table').first();
      const link = associatedTable.find('a[href*="groupId/"]').attr('href');
      
      if (link) {
        foundGroupId = link.match(/groupId\/(\d+)/)?.[1];
      }
    }

    if (!foundGroupId) {
      return res.status(404).json({ error: `No Elective Group found for S${stage} Sem ${semester}` });
    }

    // 3. Fetch the actual modules from the discovered Group ID
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

    res.status(200).json({ 
      stage, 
      semester, 
      groupId: foundGroupId, 
      modules 
    });

  } catch (e) {
    res.status(500).json({ error: e.message });
  }
};