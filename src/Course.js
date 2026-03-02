// Course.js
import React, { useState, useEffect } from 'react';

const Course = ({ course }) => {
  // 1. Create a state to hold the 'live' version of the course
  const [liveCourse, setLiveCourse] = useState(course);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchElectives = async () => {
      setLoading(true);
      
      // Create a deep copy of the course to modify
      let updatedCourse = JSON.parse(JSON.stringify(course));

      // 2. Loop through stages and semesters to find labels
      for (let stage of updatedCourse.stages) {
        for (let sem of stage.semesters) {
          for (let mod of sem.modules) {
            
            if (mod.akariLabel) {
              try {
                // Fetch from your new label-based scraper
                const res = await fetch(`/api/fetch-group?courseId=${course.id}&label=${encodeURIComponent(mod.akariLabel)}`);
                const data = await res.json();
                
                // Update the options array with live modules
                mod.options = data;
              } catch (e) {
                console.error("Failed to fetch:", mod.akariLabel);
              }
            }
          }
        }
      }
      
      setLiveCourse(updatedCourse);
      setLoading(false);
    };

    fetchElectives();
  }, [course]); // This triggers every time you click a new tab in App.js

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