// App.js
import React, { useState } from 'react';
import coursesData from './data/index.js'; // This now imports from your new index.js file
import Course from './Course.js';
import './styles.css';

// Disclaimer Component to keep the structure clean
const Disclaimer = () => (
  <div className="course-disclaimer">
    <p>
      <strong>Disclaimer:</strong> This is an unofficial, manually maintained resource by a member of SoCET staff — please refer to Akari for official course information.
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