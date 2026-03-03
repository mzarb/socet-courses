import React, { useState, useEffect } from 'react';

const routePrefixes = ['Route A', 'Route B', 'Route C', 'Route D', 'Route E', 'Route F'];

const Module = ({ module, courseID }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  // Start with whatever is in the options (static routes or fallback electives)
  const [liveOptions, setLiveOptions] = useState(module.options || []);

  useEffect(() => {
    // Only fetch if it's an elective with a label
    if (module.type === "Elective Choice" && module.akariLabel && courseID) {
      fetch(`/api/fetch-group?courseId=${courseID}&label=${encodeURIComponent(module.akariLabel)}`)
        .then(res => res.json())
        .then(data => {
          if (data && data.length > 0) {
            // Unify the data: Map Akari 'title' to 'name' to match your moduleList
            const formatted = data.map(m => ({
              code: m.code,
              name: m.title 
            }));
            setLiveOptions(formatted);
          }
        })
        .catch(err => console.error("Sync failed:", err));
    }
  }, [module.akariLabel, courseID, module.type]);

  const handleMouseEnter = () => {
    if (module.type === "Elective Choice" || module.type === "Route Choice") {
      setIsExpanded(true);
    }
  };

  const handleMouseLeave = () => setIsExpanded(false);

  const moduleClassName = `module-box ${module.type.toLowerCase().replace(/\s/g, '-')}`;

  return (
    <div
      className={moduleClassName}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{ gridColumn: `span ${module.size || 1}` }}
    >
      <div className="module-content">
        <div className="module-code">{module.code}</div>
        <div className="module-name">{module.name}</div>
      </div>

      {isExpanded && (module.type === "Elective Choice" || module.type === "Route Choice") && (
        <ul className="elective-options">
          {/* If it's an elective waiting for data, show syncing. Routes will skip this. */}
          {module.type === "Elective Choice" && module.akariLabel && liveOptions.length === 0 ? (
            <li className="loading-text">Syncing with Akari...</li>
          ) : (
            liveOptions.map((option, index) => (
              <li key={index}>
                {module.type === "Elective Choice" && `${option.code}: ${option.name}`}
                {module.type === "Route Choice" && (
                  `${routePrefixes[index] || 'Route'}: ${option.code}: ${option.name}`
                )}
              </li>
            ))
          )}
        </ul>
      )}
    </div>
  );
};

export default Module;