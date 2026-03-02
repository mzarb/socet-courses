const axios = require('axios');
const cheerio = require('cheerio');

module.exports = async (req, res) => {
  const { courseId, stage, semester } = req.query;
  const url = `https://rgu.akarisoftware.com/index.cfm/page/course/courseId/${courseId}/prgdeliveryperiodid/968`;

  try {
    const { data } = await axios.get(url);
    const $ = cheerio.load(data);
    
    // 1. ISOLATE THE STAGE: Find the start and end of the requested Stage
    const stageHeader = $(`h3:contains("Stage ${stage}"), h4:contains("Stage ${stage}"), .group-header:contains("Stage ${stage}")`).first();
    
    if (!stageHeader.length) {
      return res.status(404).json({ error: `Could not find header for Stage ${stage}` });
    }

    // Grab all HTML elements following the Stage header until the next Stage header appears
    let stageHtmlChunk = '';
    stageHeader.nextAll().each((i, el) => {
      const text = $(el).text();
      if (/Stage \d/i.test(text) && ( $(el).is('h3') || $(el).is('h4') || $(el).hasClass('group-header') )) {
        return false; // Stop when the next Stage starts
      }
      stageHtmlChunk += $.html(el);
    });

    // 2. SEARCH WITHIN CHUNK: Now only look for the Semester inside that isolated block
    const $chunk = cheerio.load(stageHtmlChunk);
    let foundGroupId = null;

    $chunk(`th:contains("Semester ${semester}"), td:contains("Semester ${semester}"), h4:contains("Semester ${semester}")`).each((i, el) => {
      // Find the first groupId link in the table associated with this specific Semester header
      const table = $chunk(el).closest('table').length ? $chunk(el).closest('table') : $chunk(el).nextAll('table').first();
      const link = table.find('a[href*="groupId/"]').attr('href');
      
      if (link) {
        foundGroupId = link.match(/groupId\/(\d+)/)?.[1];
        return false;
      }
    });

    if (!foundGroupId) {
      return res.status(404).json({ error: `No elective link found in Stage ${stage} Semester ${semester}` });
    }

    // 3. FETCH DATA: Standard cleanup
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