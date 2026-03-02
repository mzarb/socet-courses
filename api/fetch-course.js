// Inside the $('th, td, h3, h4...').each loop:
const text = $(el).text().trim();

// Be very specific: only update if it strictly matches the pattern
if (/Stage \d/.test(text)) {
    currentStage = text.match(/Stage \d/)[0];
    // Reset semester when stage changes to avoid "Stage 2 / Semester 1" carryover
    currentSemester = "Semester 1"; 
}

if (/Semester \d/.test(text)) {
    currentSemester = text.match(/Semester \d/)[0];
}