const axios = require('axios');
const cheerio = require('cheerio');

module.exports = async (req, res) => {
  const { courseId } = req.query;
  const url = `https://rgu.akarisoftware.com/index.cfm/page/course/courseId/${courseId}`;

  try {
    const { data } = await axios.get(url);
    const $ = cheerio.load(data);
    const modules = [];

    // These "sticky" variables stay the same until we hit a new Stage/Semester label
    let currentStage = "Stage 1"; 
    let currentSemester = "Semester 1";

    // We look at EVERY row in EVERY table on the page
    $('table tr').each((i, row) => {
      const rowText = $(row).text().trim();

      // 1. Check if this row is actually a Header telling us the Stage
      if (rowText.includes('Stage')) {
        const stageMatch = rowText.match(/Stage \d/);
        if (stageMatch) currentStage = stageMatch[0];
      }

      // 2. Check if this row is a Header telling us the Semester
      if (rowText.includes('Semester')) {
        const semMatch = rowText.match(/Semester \d/);
        if (semMatch) currentSemester = semMatch[0];
      }

      // 3. Look for module data in the cells
      const cells = $(row).find('td');
      if (cells.length >= 2) {
        const code = $(cells[0]).text().trim();
        const title = $(cells[1]).text().trim();

        // If it looks like an RGU code (e.g., CM1122)
        if (/^[A-Z]{2}\d{4}$/.test(code)) {
          modules.push({
            code,
            title,
            stage: currentStage,
            semester: currentSemester,
            // Tag as elective if the row or the text nearby says "Elective"
            isElective: rowText.toLowerCase().includes('elective')
          });
        }
      }
    });

    res.status(200).json({
      course: $('h2').text().trim(),
      modules: modules
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};