import React, { useState, useEffect } from 'react';

const routePrefixes = ['Route A', 'Route B', 'Route C', 'Route D', 'Route E', 'Route F'];

const Module = ({ module, courseId }) => { // Add courseId to props
  const [isExpanded, setIsExpanded] = useState(false);
  // 1. New state to hold live options
  const [liveOptions, setLiveOptions] = useState(module.options || []);

  // 2. Fetch live data if a label exists
  useEffect(() => {
    if (module.akariLabel && courseId) {
      fetch(`/api/fetch-group?courseId=${courseId}&label=${encodeURIComponent(module.akariLabel)}`)
        .then(res => res.json())
        .then(data => {
          if (data && data.length > 0) {
            // Map the API results to match your expected 'name' field
            const formatted = data.map(m => ({
              code: m.code,
              name: m.title // API returns 'title', your UI uses 'name'
            }));
            setLiveOptions(formatted);
          }
        })
        .catch(err => console.error("Live fetch failed:", err));
    }
  }, [module.akariLabel, courseId]);

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
      
      {(module.type === "Elective Choice" || module.type === "Route Choice") && isExpanded && liveOptions && (
        <ul className="elective-options">
          {liveOptions.map((option, index) => (
            <li key={index}>
              {module.type === "Elective Choice" && `${option.code}: ${option.name}`}
              {module.type === "Route Choice" && (
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