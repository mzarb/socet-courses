// Course.js
import React from 'react';
import Semester from './Semester';

const Course = ({ course }) => {
  if (!course) {
    return <div>Loading...</div>;
  }

  return (
    <div className="course-container">
      <h2 className="course-title">{course.name}</h2>
      {course.stages.map((stage, stageIndex) => (
        <React.Fragment key={stageIndex}>
          <div className="stage-row">
            <div className="stage-label">{stage.stageName}</div>
            <div className="semesters-row">
              {stage.semesters.map((semester, semesterIndex) => (
                <Semester key={semesterIndex} semester={semester} />
              ))}
            </div>
          </div>
          {/* Add the conditional rendering here */}
          {stage.gapYear && (
            <div className="gap-year">
              Optional Gap Year: Study Abroad, Industrial Placement
            </div>
          )}
        </React.Fragment>
      ))}
    </div>
  );
};

export default Course;