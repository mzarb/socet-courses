const axios = require('axios');
const cheerio = require('cheerio');

module.exports = async (req, res) => {
  const { courseId, label } = req.query; // e.g. "Cyber Security - Electives Group 1"
  const url = `https://rgu.akarisoftware.com/index.cfm/page/course/courseId/${courseId}/prgdeliveryperiodid/968`;

  try {
    const { data } = await axios.get(url);
    const $ = cheerio.load(data);
    let foundGroupId = null;

    // 1. Find the link that matches your label exactly
    $('a[href*="groupId/"]').each((i, el) => {
      const linkText = $(el).text().trim();
      if (linkText.toLowerCase() === label.toLowerCase()) {
        foundGroupId = $(el).attr('href').match(/groupId\/(\d+)/)?.[1];
        return false; 
      }
    });

    if (!foundGroupId) {
      return res.status(404).json({ error: `Label "${label}" not found on page.` });
    }

    // 2. Fetch the actual modules for that ID
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

    res.status(200).json(modules);
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
};