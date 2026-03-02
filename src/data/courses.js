const axios = require('axios');
const cheerio = require('cheerio');

module.exports = async (req, res) => {
  const { courseId } = req.query;
  const url = `https://rgu.akarisoftware.com/index.cfm/page/course/courseId/${courseId}/prgdeliveryperiodid/968`;

  try {
    const { data } = await axios.get(url);
    const $ = cheerio.load(data);
    const modules = [];

    // 1. Find EVERY table row on the page
    $('tr').each((i, row) => {
      const cells = $(row).find('td');
      if (cells.length < 2) return;

      const code = $(cells[0]).text().trim().replace(/[^A-Z0-9]/g, '');
      
      // 2. Only process if it's a real Module Code (CM1234)
      if (/^[A-Z]{2}\d{4}$/.test(code)) {
        const title = $(cells[1]).text().split(/Requisites|Prerequisite|\n\n/)[0].trim();
        
        // 3. "Look Upwards" in the HTML to find the nearest Stage/Semester
        // This is the "Magic" bit that works regardless of layout
        let stage = $(row).closest('table').prevAll(':contains("Stage")').first().text().trim() || "Stage 1";
        let semester = $(row).closest('table').prevAll(':contains("Semester")').first().text().trim() || "Semester 1";

        // Clean up the strings (e.g., "Stage 2 / Semester 1" -> "Stage 2")
        stage = stage.match(/Stage \d/)?.[0] || "Stage 1";
        semester = semester.match(/Semester \d/)?.[0] || "Semester 1";

        modules.push({ code, title, stage, semester });
      }
    });

    // 4. Strict Deduplication by Code
    const unique = Array.from(new Map(modules.map(m => [m.code, m])).values());

    res.status(200).json({
      course: $('h2').first().text().trim(),
      modules: unique
    });
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
};