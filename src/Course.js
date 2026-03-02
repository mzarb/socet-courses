import React, { useState, useEffect } from 'react';

// This small component replaces the static dropdown
const LiveElectiveDropdown = ({ courseId, label }) => {
  const [options, setOptions] = useState([]);

  useEffect(() => {
    fetch(`/api/fetch-group?courseId=${courseId}&label=${encodeURIComponent(label)}`)
      .then(res => res.json())
      .then(data => setOptions(data))
      .catch(err => console.error("Failed to load", label));
  }, [courseId, label]);

  return (
    <select className="elective-selector">
      <option value="">{options.length > 0 ? "Select Elective..." : "Loading..."}</option>
      {options.map((opt, i) => (
        <option key={i} value={opt.code}>{opt.code}: {opt.title}</option>
      ))}
    </select>
  );
};

const Course = ({ course }) => {
  return (
    <div className="course-container">
      <h2>{course.name}</h2>
      {/* Use your EXACT original mapping code here */}
      {course.stages.map((stage, sIdx) => (
        <div key={sIdx} className="stage-section">
          <h3>{stage.stageName}</h3>
          {stage.semesters.map((sem, semIdx) => (
            <div key={semIdx} className="semester-column">
              {sem.modules.map((mod, mIdx) => (
                <div key={mIdx} className="module-card">
                  <strong>{mod.code}</strong>
                  <p>{mod.title}</p>
                  
                  {/* ONLY change this part */}
                  {mod.type === "Elective Choice" && mod.akariLabel ? (
                    <LiveElectiveDropdown courseId={course.id} label={mod.akariLabel} />
                  ) : (
                    /* Fallback to your old dropdown if no label exists */
                    mod.type === "Elective Choice" && (
                      <select><option>Manual List...</option></select>
                    )
                  )}
                </div>
              ))}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default Course;