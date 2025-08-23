// Semester.js
import React from 'react';
import Module from './Module';

const Semester = ({ semester }) => (
  <div className="semester-container">
    <div className="semester-header">{semester.semesterName}</div>
    <div className="modules-grid">
      {semester.modules.map((module, index) => (
        <Module key={index} module={module} />
      ))}
    </div>
  </div>
);

export default Semester;