// App.js
import React, { useState } from 'react';
import coursesData from './data/index.js'; // This now imports from your new index.js file
import Course from './Course.js';
import './styles.css';

// Disclaimer Component to keep the structure clean
const Disclaimer = () => (
  <div className="course-disclaimer">
    <p>
      <strong>Disclaimer:</strong> This course structure is provisional for the 2026/2027 academic year. Furthermore, this is not an official RGU resource, and is populated/maintained manually - the official course structures on Akari should be considered the single source of truth.
    </p>
  </div>
);
function App() {
  const [selectedCourseIndex, setSelectedCourseIndex] = useState(0);

  return (
    <div className="app-container">
      <div className="course-tabs">
        {coursesData.map((course, index) => (
          <button
            key={index}
            className={`tab-button ${index === selectedCourseIndex ? 'active' : ''}`}
            onClick={() => setSelectedCourseIndex(index)}
          >
            {course.name}
          </button>
        ))}
      </div>
      <Course course={coursesData[selectedCourseIndex]} />

      <Disclaimer />
    </div>
  );
}

export default App;