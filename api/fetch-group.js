const axios = require('axios');
const cheerio = require('cheerio');

module.exports = async (req, res) => {
  const { courseId, stage, semester } = req.query;
  const url = `https://rgu.akarisoftware.com/index.cfm/page/course/courseId/${courseId}/prgdeliveryperiodid/968`;

  try {
    const { data } = await axios.get(url);
    const $ = cheerio.load(data);
    
    // 1. Find EVERY elective group link on the page in order
    const electiveGroupIds = [];
    $('a[href*="groupId/"]').each((i, el) => {
      const match = $(el).attr('href').match(/groupId\/(\d+)/);
      if (match) electiveGroupIds.push(match[1]);
    });

    // 2. Calculate the Index
    // Stage 1, Sem 1 = Index 0
    // Stage 1, Sem 2 = Index 1
    // Stage 2, Sem 1 = Index 2...
    const index = ((parseInt(stage) - 1) * 2) + (parseInt(semester) - 1);
    const foundGroupId = electiveGroupIds[index];

    if (!foundGroupId) {
      return res.status(404).json({ error: `Could not find elective group at position ${index}` });
    }

    // 3. Fetch the modules from that ID
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

    res.status(200).json({ stage, semester, index, groupId: foundGroupId, modules });

  } catch (e) {
    res.status(500).json({ error: e.message });
  }
};