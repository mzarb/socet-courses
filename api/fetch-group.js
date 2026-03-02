const axios = require('axios');
const cheerio = require('cheerio');

module.exports = async (req, res) => {
  const { courseId, stage, semester } = req.query;
  const url = `https://rgu.akarisoftware.com/index.cfm/page/course/courseId/${courseId}/prgdeliveryperiodid/968`;

  try {
    const { data } = await axios.get(url);
    const $ = cheerio.load(data);
    
    // 1. Find all elective links
    const electiveGroupIds = [];
    $('a[href*="groupId/"]').each((i, el) => {
      if ($(el).text().toLowerCase().includes('elective')) {
        electiveGroupIds.push($(el).attr('href').match(/groupId\/(\d+)/)?.[1]);
      }
    });

    // 2. Map Stage/Sem to the index (0, 1, 2, 3...)
    // This assumes 2 electives per stage. 
    // If S1S1 is the 1st link, S1S2 is the 2nd, S2S1 is the 3rd...
    const index = ((parseInt(stage) - 1) * 2) + (parseInt(semester) - 1);
    const foundId = electiveGroupIds[index];

    if (!foundId) return res.status(404).json([]);

    // 3. Get the modules
    const gRes = await axios.get(`https://rgu.akarisoftware.com/index.cfm/page/group/groupId/${foundId}`);
    const g$ = cheerio.load(gRes.data);
    const modules = [];

    g$('table tr').each((j, row) => {
      const cells = g$(row).find('td');
      if (cells.length >= 2) {
        const code = g$(cells[0]).text().trim().replace(/[^A-Z0-9]/g, '');
        const title = g$(cells[1]).text().split(/Requisites|Prerequisite/)[0].trim();
        if (/^[A-Z]{2}\d{4}$/.test(code)) modules.push({ code, title });
      }
    });

    res.status(200).json(modules);
  } catch (e) {
    res.status(500).json([]);
  }
};