// App.js
import React, { useState } from 'react';
import coursesData from './data/index.js'; // This now imports from your new index.js file
import Course from './Course.js';
import './styles.css';

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
    </div>
  );
}

export default App;