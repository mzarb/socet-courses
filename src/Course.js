// Course.js
import React, { useState, useEffect } from 'react';

const Course = ({ course }) => {
  // 1. Initialize with the raw prop immediately so Core modules show up
  const [liveCourse, setLiveCourse] = useState(course);
  const [loading, setLoading] = useState(false);

  // 2. Sync state whenever the prop changes (important for tab switching!)
  useEffect(() => {
    setLiveCourse(course);
  }, [course]);

  useEffect(() => {
    const fetchElectives = async () => {
      // If there are no elective labels, don't bother fetching
      const hasLabels = course.stages.some(s => 
        s.semesters.some(sem => 
          sem.modules.some(m => m.akariLabel)
        )
      );

      if (!hasLabels) return;

      setLoading(true);
      
      // Use the functional update to ensure we're working with the latest state
      setLiveCourse(prev => {
        let updated = JSON.parse(JSON.stringify(prev));
        
        // We use a separate async function to handle the actual network calls
        const performUpdate = async () => {
          for (let stage of updated.stages) {
            for (let sem of stage.semesters) {
              for (let mod of sem.modules) {
                if (mod.akariLabel) {
                  try {
                    const res = await fetch(`/api/fetch-group?courseId=${course.id}&label=${encodeURIComponent(mod.akariLabel)}`);
                    const data = await res.json();
                    mod.options = data;
                  } catch (e) {
                    console.error("Fetch failed for:", mod.akariLabel);
                  }
                }
              }
            }
          }
          setLiveCourse(updated);
          setLoading(false);
        };

        performUpdate();
        return prev; // Keep showing the old data while the update happens
      });
    };

    fetchElectives();
  }, [course.id]); // Only re-run when the Course ID actually changes


  // 3. Render using liveCourse instead of the raw course prop
  return (
    <div className="course-container">
      <h2>{liveCourse.name}</h2>
      {loading && <p className="loading-status">Updating electives from Akari...</p>}
      
      {liveCourse.stages.map((stage, sIdx) => (
        <div key={sIdx} className="stage-section">
          <h3>{stage.stageName}</h3>
          {/* ... your existing grid mapping logic for semesters/modules ... */}
        </div>
      ))}
    </div>
  );
};

export default Course;