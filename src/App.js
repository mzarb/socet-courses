import React, { useState } from 'react';
import coursesData from './data/index.js';
import Course from './Course.js';
import './styles.css';

const Disclaimer = () => (
  <div className="course-disclaimer">
    <p>
      Note electives are still being updated... <strong>Disclaimer:</strong> This is an unofficial resource.
    </p>
  </div>
);

function App() {
  const [selectedCourseIndex, setSelectedCourseIndex] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State for the hamburger

  const handleCourseSelect = (index) => {
    setSelectedCourseIndex(index);
    setIsMenuOpen(false); // Close menu after picking a course
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
            onClick={() => {
              setSelectedCourseIndex(index);
              setIsMenuOpen(false); // Close menu on selection
            }}
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

export default App;