function App() {
  const [selectedCourseIndex, setSelectedCourseIndex] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleCourseSelect = (index) => {
    setSelectedCourseIndex(index);
    setIsMenuOpen(false); 
  };

  return (
    <div className="app-container">
      {/* Side Menu Drawer remains the same */}
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
        <div className="title-wrapper">
          <h1 className="course-title">{coursesData[selectedCourseIndex].name}</h1>
          
          <button className="hamburger" onClick={() => setIsMenuOpen(!isMenuOpen)}>
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