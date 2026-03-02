const axios = require('axios');
const cheerio = require('cheerio');

module.exports = async (req, res) => {
  const { courseId } = req.query; // e.g., 6206
  const url = `https://rgu.akarisoftware.com/index.cfm/page/course/courseId/${courseId}`;

  try {
    const { data } = await axios.get(url);
    const $ = cheerio.load(data);
    
    const courseTitle = $('h2').text().trim();
    const structure = [];

    // Akari usually groups modules by "Stages" in specific table headers
    // We look for any table that contains module information
    $('table').each((index, table) => {
      const tableText = $(table).text();
      
      // We only care about tables that look like a Stage/Semester list
      if (tableText.includes('Stage') || tableText.includes('Semester')) {
        const rows = $(table).find('tr');
        
        rows.each((i, row) => {
          const cells = $(row).find('td');
          if (cells.length >= 2) {
            const code = $(cells[0]).text().trim();
            const title = $(cells[1]).text().trim();

            // Validate it's a real RGU module code (e.g., CM1102)
            if (/^[A-Z]{2}\d{4}$/.test(code)) {
              structure.push({
                code: code,
                title: title,
                // Check if the row or parent table mentions "Elective"
                isElective: $(row).text().toLowerCase().includes('elective') || 
                            $(table).prev().text().toLowerCase().includes('elective')
              });
            }
          }
        });
      }
    });

    // Remove duplicates (sometimes Akari lists them twice for different deliveries)
    const uniqueModules = Array.from(new Set(structure.map(m => m.code)))
      .map(code => structure.find(m => m.code === code));

    res.status(200).json({
      courseTitle,
      lastUpdated: new Date().toISOString(),
      modules: uniqueModules
    });

  } catch (error) {
    res.status(500).json({ error: "Scraping failed", details: error.message });
  }
};