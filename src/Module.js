// Module.js
import React, { useState } from 'react';

  // Array for route prefixes
  const routePrefixes = ['Route A', 'Route B', 'Route C', 'Route D', 'Route E', 'Route F'];

const Module = ({ module }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleMouseEnter = () => {
    if (module.type === "Elective Choice" || module.type === "Route Choice") {
      setIsExpanded(true);
    }
  };

  const handleMouseLeave = () => {
    if (module.type === "Elective Choice" || module.type === "Route Choice") {
      setIsExpanded(false);
    }
  };

  // Update this line to include a class for the core modules
  // This line now correctly applies the color classes based on the module's type.
const moduleClassName = `module-box ${module.type.toLowerCase().replace(/\s/g, '-')}`;

  const boxStyle = {
    gridColumn: `span ${module.size || 1}`,
  };

  return (
    <div
      className={moduleClassName}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={boxStyle}
    >
      <div className="module-content">
        <div className="module-code">{module.code}</div>
        <div className="module-name">{module.name}</div>
      </div>
          {(module.type === "Elective Choice" || module.type === "Route Choice") && isExpanded && module.options && (
        <ul className="elective-options">
          {module.options.map((option, index) => (
            <li key={index}>
              {module.type === "Elective Choice" && `${option.code}: ${option.name}`}
              {module.type === "Route Choice" && (
                // Prepend 'Route A', 'Route B', etc. for Route Choice options
                `${routePrefixes[index]}: ${option.code}: ${option.name}`
              )}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Module;