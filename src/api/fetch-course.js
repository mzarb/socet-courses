// api/fetch-course.js
import axios from 'axios';
import * as cheerio from 'cheerio';

export default async function handler(req, res) {
  const { courseId } = req.query; // e.g. 6206
  const url = `https://rgu.akarisoftware.com/index.cfm/page/course/courseId/${courseId}`;

  try {
    const { data } = await axios.get(url);
    const $ = cheerio.load(data);
    
    // For now, let's just return the page title to prove it works
    const title = $('h2').text().trim();
    
    res.status(200).json({ courseTitle: title, message: "Connection successful!" });
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch from Akari" });
  }
}