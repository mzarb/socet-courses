const axios = require('axios');
const cheerio = require('cheerio');

// Helper function to scrape a specific Group URL (for electives)
async function fetchGroupModules(groupId) {
  const url = `https://rgu.akarisoftware.com/index.cfm/page/group/groupId/${groupId}`;
  const { data } = await axios.get(url);
  const $ = cheerio.load(data);
  const modules = [];
  
  $('table tr').each((i, el) => {
    const code = $(el).find('td').first().text().trim();
    const title = $(el).find('td').eq(1).text().trim();
    if (/^[A-Z]{2}\d{4}$/.test(code)) {
      modules.push({ code, title, isElective: true });
    }
  });
  return modules;
}

module.exports = async (req, res) => {
  const { courseId } = req.query;
  const url = `https://rgu.akarisoftware.com/index.cfm/page/course/courseId/${courseId}`;

  try {
    const { data } = await axios.get(url);
    const $ = cheerio.load(data);
    const courseTitle = $('h2').text().trim();
    let allModules = [];

    // 1. Grab Core Modules from the main tables
    $('table tr').each((i, row) => {
      const cells = $(row).find('td');
      const code = $(cells[0]).text().trim();
      const title = $(cells[1]).text().trim();
      if (/^[A-Z]{2}\d{4}$/.test(code)) {
        allModules.push({ code, title, isElective: false });
      }
    });

    // 2. Find links to Elective Groups (looking for "groupId/")
    const groupLinks = [];
    $('a[href*="groupId/"]').each((i, link) => {
      const href = $(link).attr('href');
      const match = href.match(/groupId\/(\d+)/);
      if (match) groupLinks.push(match[1]);
    });

    // 3. Scrape each Elective Group found
    const uniqueGroups = [...new Set(groupLinks)];
    for (const groupId of uniqueGroups) {
      const electiveModules = await fetchGroupModules(groupId);
      allModules = [...allModules, ...electiveModules];
    }

    // Deduplicate
    const finalModules = Array.from(new Set(allModules.map(m => m.code)))
      .map(code => allModules.find(m => m.code === code));

    res.status(200).json({ courseTitle, modules: finalModules });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};