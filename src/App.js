import React, { useState } from 'react';
import coursesData from './data/index.js'; 
import Course from './Course.js';
import './styles.css';

const Disclaimer = () => (
  <div className="course-disclaimer">
    <p>
      Updated March 2026. This resource now reflects delivery for the 2026/27 academic session. <strong>Disclaimer:</strong> This is an unofficial, manually maintained resource by a member of SoCET staff — please refer to Akari for official course information.
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

  // This prevents the background from scrolling while the menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isMenuOpen]);

  return (
    <div className="app-container">
      {/* The side drawer menu */}
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

      <div className="course-container">
        {/* Integrated Title and Hamburger Wrapper */}
        <div className="title-wrapper">
          <h1 className="course-title">{coursesData[selectedCourseIndex].name}</h1>
          
          <button 
            className="hamburger" 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <div className={isMenuOpen ? 'open' : ''}></div>
            <div className={isMenuOpen ? 'open' : ''}></div>
            <div className={isMenuOpen ? 'open' : ''}></div>
          </button>
        </div>

        <Course course={coursesData[selectedCourseIndex]} />
      </div>
      
      <Disclaimer />
    </div>
  );
}

// Essential for the build to pass:
export default App;