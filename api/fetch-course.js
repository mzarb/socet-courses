const axios = require('axios');
const cheerio = require('cheerio');

module.exports = async (req, res) => {
  const { courseId } = req.query;
  const url = `https://rgu.akarisoftware.com/index.cfm/page/course/courseId/${courseId}`;

  try {
    const { data } = await axios.get(url);
    const $ = cheerio.load(data);
    const courseTitle = $('h2').text().trim();
    let allModules = [];
    let currentStage = "Unknown Stage";
    let currentSemester = "Unknown Semester";

    // We iterate through every element in the main container to keep track of order
    $('table, h3, h4, h5, div').each((index, element) => {
      const text = $(element).text().trim();

      // Update Stage/Semester context when we hit a heading
      if (text.includes('Stage')) currentStage = text.match(/Stage \d/)?.[0] || text;
      if (text.includes('Semester')) currentSemester = text.match(/Semester \d/)?.[0] || text;

      // If it's a table, scrape the modules inside and tag them with the current context
      if ($(element).is('table')) {
        $(element).find('tr').each((i, row) => {
          const cells = $(row).find('td');
          const code = $(cells[0]).text().trim();
          const title = $(cells[1]).text().trim();

          if (/^[A-Z]{2}\d{4}$/.test(code)) {
            allModules.push({
              code,
              title,
              stage: currentStage,
              semester: currentSemester,
              isElective: text.toLowerCase().includes('elective')
            });
          }
        });
      }
    });

    // Handle Elective Groups (Nested Links)
    // We can also find the Stage/Semester associated with the Link's parent container
    const groupLinks = [];
    $('a[href*="groupId/"]').each((i, link) => {
      const href = $(link).attr('href');
      const containerText = $(link).closest('td, div, table').prev().text().trim();
      const match = href.match(/groupId\/(\d+)/);
      if (match) {
        groupLinks.push({
          id: match[1],
          stage: containerText.includes('Stage') ? containerText : "Stage 1", // Fallback logic
          semester: containerText.includes('Semester') ? containerText : "Semester 1"
        });
      }
    });

    // ... (Optional: You could loop through groupLinks here to fetch those too)

    res.status(200).json({
      courseTitle,
      modules: allModules
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};