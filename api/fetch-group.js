const axios = require('axios');
const cheerio = require('cheerio');

module.exports = async (req, res) => {
  const { courseId, stage, semester } = req.query;
  const courseUrl = `https://rgu.akarisoftware.com/index.cfm/page/course/courseId/${courseId}/prgdeliveryperiodid/968`;

  try {
    const { data } = await axios.get(courseUrl);
    const $ = cheerio.load(data);
    let foundGroupId = null;

    // Search for the specific header (e.g., "Stage 1 / Semester 1")
    // Then find the first "groupId" link that follows it
    $('th, td, .group-header').each((i, el) => {
      const text = $(el).text();
      if (text.toLowerCase().includes(`stage ${stage}`) && text.toLowerCase().includes(`semester ${semester}`)) {
        const nextLinks = $(el).closest('table').find('a[href*="groupId/"]');
        if (nextLinks.length > 0) {
          foundGroupId = $(nextLinks[0]).attr('href').match(/groupId\/(\d+)/)?.[1];
          return false; // Break loop
        }
      }
    });

    if (!foundGroupId) return res.status(404).json({ error: "Group ID not found for this stage/sem" });

    // Now scrape that specific group
    const groupRes = await axios.get(`https://rgu.akarisoftware.com/index.cfm/page/group/groupId/${foundGroupId}`);
    const group$ = cheerio.load(groupRes.data);
    const modules = [];

    group$('table tr').each((i, row) => {
      const cells = group$(row).find('td');
      const code = group$(cells[0]).text().trim().replace(/[^A-Z0-9]/g, '');
      const title = group$(cells[1]).text().split(/Requisites|Prerequisite|\n\n/)[0].trim();
      if (/^[A-Z]{2}\d{4}$/.test(code)) {
        modules.push({ code, title });
      }
    });

    res.status(200).json({ groupId: foundGroupId, modules });
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
};