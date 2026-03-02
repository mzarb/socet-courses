const axios = require('axios');
const cheerio = require('cheerio');

async function scrapeGroup(groupId, stage, semester) {
  const url = `https://rgu.akarisoftware.com/index.cfm/page/group/groupId/${groupId}`;
  const { data } = await axios.get(url);
  const $ = cheerio.load(data);
  const modules = [];
  $('table tr').each((i, el) => {
    const cells = $(el).find('td');
    const code = $(cells[0]).text().trim();
    const title = $(cells[1]).text().trim();
    if (/^[A-Z]{2}\d{4}$/.test(code)) {
      modules.push({ code, title, stage, semester, isElective: true });
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
    let allModules = [];
    let lastFoundStage = "Stage 1";
    let lastFoundSemester = "Semester 1";

    // Walk through the page elements in order
    $('h3, h4, h5, table, div.group-header').each((i, el) => {
      const text = $(el).text().trim();

      // Update context if we see Stage/Semester keywords
      if (text.includes('Stage')) lastFoundStage = text.match(/Stage \d/)?.[0] || lastFoundStage;
      if (text.includes('Semester')) lastFoundSemester = text.match(/Semester \d/)?.[0] || lastFoundSemester;

      // If it's a table of modules
      if ($(el).is('table')) {
        $(el).find('tr').each((j, row) => {
          const cells = $(row).find('td');
          const code = $(cells[0]).text().trim();
          const title = $(cells[1]).text().trim();
          
          if (/^[A-Z]{2}\d{4}$/.test(code)) {
            allModules.push({ 
              code, title, 
              stage: lastFoundStage, 
              semester: lastFoundSemester, 
              isElective: false 
            });
          }

          // If there's a link to an elective group in this row or nearby
          const groupLink = $(row).find('a[href*="groupId/"]').attr('href');
          if (groupLink) {
             const groupId = groupLink.match(/groupId\/(\d+)/)?.[1];
             // We'll handle these in the next step to keep it clean
          }
        });
      }
    });

    // To be truly "Future Proof," we could add a loop here that fetches 
    // those group IDs found during the walk.
    
    res.status(200).json({ course: $('h2').text().trim(), modules: allModules });
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
};