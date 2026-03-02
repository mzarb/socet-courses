const axios = require('axios');
const cheerio = require('cheerio');

module.exports = async (req, res) => {
  const { groupId } = req.query;
  const url = `https://rgu.akarisoftware.com/index.cfm/page/group/groupId/${groupId}`;

  try {
    const { data } = await axios.get(url);
    const $ = cheerio.load(data);
    const modules = [];

    $('table tr').each((i, row) => {
      const cells = $(row).find('td');
      if (cells.length >= 2) {
        const code = $(cells[0]).text().trim().replace(/[^A-Z0-9]/g, '');
        const titleRaw = $(cells[1]).text().trim();
        const title = titleRaw.split(/Requisites|Prerequisite|\n\n/)[0].trim();

        if (/^[A-Z]{2}\d{4}$/.test(code)) {
          modules.push({ code, title, isElective: true });
        }
      }
    });

    res.status(200).json(modules);
  } catch (e) {
    res.status(500).json({ error: "Failed to fetch group" });
  }
};