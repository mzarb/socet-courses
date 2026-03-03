function App() {
  const [selectedCourseIndex, setSelectedCourseIndex] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // This is the function the error was complaining about
  const handleCourseSelect = (index) => {
    setSelectedCourseIndex(index);
    setIsMenuOpen(false); // This closes the menu automatically when a course is clicked
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
              onClick={() => handleCourseSelect(index)} // Now we are using it!
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