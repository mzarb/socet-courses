import React, { useState } from 'react';
import coursesData from './data/index.js'; 
import Course from './Course.js';
import './styles.css';

const Disclaimer = () => (
  <div className="course-disclaimer">
    <p>
      Note electives are still being updated as we are in course transition and may not be correct. <strong>Disclaimer:</strong> This is an unofficial, manually maintained resource by a member of SoCET staff — please refer to Akari for official course information.
    </p>
  </div>
);

function App() {
  const [selectedCourseIndex, setSelectedCourseIndex] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleCourseSelect = (index) => {
    setSelectedCourseIndex(index);
    setIsMenuOpen(false); 
  };

  return (
    <div className="app-container">
      <header className="navbar-header">
        <div className="nav-logo">SoCET Courses</div>
        
        <button className="hamburger" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          <div className={isMenuOpen ? 'open' : ''}></div>
          <div className={isMenuOpen ? 'open' : ''}></div>
          <div className={isMenuOpen ? 'open' : ''}></div>
        </button>

        <nav className={`course-tabs ${isMenuOpen ? 'open' : ''}`}>
          {coursesData.map((course, index) => (
            <button
              key={index}
              className={`tab-button ${index === selectedCourseIndex ? 'active' : ''}`}
              onClick={() => handleCourseSelect(index)}
            >
              {course.name}
            </button>
          ))}
        </nav>
      </header>

      <Course course={coursesData[selectedCourseIndex]} />
      <Disclaimer />
    </div>
  );
}

// THIS LINE IS THE FIX:
export default App;