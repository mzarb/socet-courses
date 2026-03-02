const axios = require('axios');
const cheerio = require('cheerio');

module.exports = async (req, res) => {
  const { courseId } = req.query; // e.g. 6206
  const url = `https://rgu.akarisoftware.com/index.cfm/page/course/courseId/${courseId}`;

  try {
    const { data } = await axios.get(url);
    const $ = cheerio.load(data);
    
    // Scrape the main title
    const title = $('h2').text().trim();
    
    res.status(200).json({ 
      courseTitle: title, 
      message: "Connection successful!" 
    });
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch from Akari", details: error.message });
  }
};