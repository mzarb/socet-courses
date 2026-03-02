import React, { useState, useEffect } from 'react';

const Course = ({ course }) => {
  // 1. Initialize state with the course prop so Core modules show up instantly
  const [liveCourse, setLiveCourse] = useState(course);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // 2. Immediately sync the UI when the tab/course changes
    setLiveCourse(course);

    const fetchElectives = async () => {
      // Check if this specific course actually has any Akari labels to hunt for
      const hasLabels = course.stages?.some(s => 
        s.semesters?.some(sem => 
          sem.modules?.some(m => m.akariLabel)
        )
      );

      // If no labels (like in Games or CS currently), stop here
      if (!hasLabels) return;

      setLoading(true);
      
      // 3. Create a deep copy to modify so we don't mess with the original props
      let updatedCourse = JSON.parse(JSON.stringify(course));

      // 4. Loop through the structure to find modules with labels
      for (let stage of updatedCourse.stages) {
        for (let sem of stage.semesters) {
          for (let mod of sem.modules) {
            
            if (mod.akariLabel) {
              try {
                // Call your new label-based scraper
                const res = await fetch(`/api/fetch-group?courseId=${course.id}&label=${encodeURIComponent(mod.akariLabel)}`);
                
                if (res.ok) {
                  const data = await res.json();
                  // Swap the empty options array with the live modules from Akari
                  mod.options = data;
                }
              } catch (e) {
                console.error(`Error fetching electives for: ${mod.akariLabel}`, e);
              }
            }
          }
        }
      }
      
      // 5. Update the state with the newly "hydrated" elective options
      setLiveCourse(updatedCourse);
      setLoading(false);
    };

    fetchElectives();

    // Including 'course' here makes the Vercel build process happy (no lint errors)
  }, [course]); 

  return (
    <div className="course-container">
      <div className="course-header">
        <h2>{liveCourse.name}</h2>
        {loading && <span className="loading-badge">Updating Electives...</span>}
      </div>

      <div className="stages-grid">
        {liveCourse.stages.map((stage, sIdx) => (
          <div key={sIdx} className="stage-box">
            <h3 className="stage-title">{stage.stageName}</h3>
            
            <div className="semesters-container">
              {stage.semesters.map((sem, semIdx) => (
                <div key={semIdx} className="semester-column">
                  <h4>{sem.semesterName}</h4>
                  
                  {sem.modules.map((module, mIdx) => (
                    <div key={mIdx} className={`module-card ${module.type.replace(/\s+/g, '-').toLowerCase()}`}>
                      <div className="module-code">{module.code}</div>
                      <div className="module-title">{module.title}</div>
                      
                      {/* If it's an elective choice, show a dropdown of the scraped options */}
                      {module.type === "Elective Choice" && module.options && (
                        <select className="elective-selector">
                          <option value="">Select an elective...</option>
                          {module.options.map((opt, oIdx) => (
                            <option key={oIdx} value={opt.code}>
                              {opt.code}: {opt.title}
                            </option>
                          ))}
                        </select>
                      )}
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Course;