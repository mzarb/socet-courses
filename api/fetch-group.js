const axios = require('axios');
const cheerio = require('cheerio');

module.exports = async (req, res) => {
  const { courseId, stage, semester } = req.query;
  const url = `https://rgu.akarisoftware.com/index.cfm/page/course/courseId/${courseId}/prgdeliveryperiodid/968`;

  try {
    const { data } = await axios.get(url);
    const $ = cheerio.load(data);
    let foundGroupId = null;

    // 1. Find the specific Stage Header
    const stageHeader = $('h3, h4, .group-header, th, td').filter((i, el) => {
      const text = $(el).text().trim();
      return new RegExp(`^Stage\\s${stage}$`, 'i').test(text) || 
             new RegExp(`^Stage\\s${stage}\\s`, 'i').test(text);
    }).first();

    if (!stageHeader.length) return res.status(404).json({ error: `Stage ${stage} not found` });

    // 2. Scan forward from that header to find the specific Semester
    let currentEl = stageHeader.next();
    let limitCounter = 0; // Safety break

    while (currentEl.length > 0 && limitCounter < 100) {
      const elText = currentEl.text().trim().toLowerCase();
      
      // If we hit the NEXT stage, stop looking immediately
      if (elText.includes('stage') && (parseInt(elText.match(/\d+/)) > parseInt(stage))) break;

      // If we find our Semester
      if (elText.includes(`semester ${semester}`)) {
        // Look for the link inside this element or the next table
        const link = currentEl.find('a[href*="groupId/"]').attr('href') || 
                     currentEl.nextUntil(':contains("Semester")', 'table').find('a[href*="groupId/"]').attr('href') ||
                     currentEl.closest('table').find('a[href*="groupId/"]').attr('href');
        
        if (link) {
          foundGroupId = link.match(/groupId\/(\d+)/)?.[1];
          break;
        }
      }
      currentEl = currentEl.next();
      limitCounter++;
    }

    if (!foundGroupId) {
      return res.status(404).json({ error: `No link found for Stage ${stage} Sem ${semester}` });
    }

    // 3. Fetch the actual modules
    const gRes = await axios.get(`https://rgu.akarisoftware.com/index.cfm/page/group/groupId/${foundGroupId}`);
    const g$ = cheerio.load(gRes.data);
    const modules = [];

    g$('table tr').each((j, row) => {
      const cells = g$(row).find('td');
      if (cells.length >= 2) {
        const code = g$(cells[0]).text().trim().replace(/[^A-Z0-9]/g, '');
        const title = g$(cells[1]).text().split(/Requisites|Prerequisite|\n\n/)[0].trim();
        if (/^[A-Z]{2}\d{4}$/.test(code)) {
          modules.push({ code, title });
        }
      }
    });

    res.status(200).json({ stage, semester, groupId: foundGroupId, modules });
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
};