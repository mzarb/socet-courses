import React, { useState, useEffect } from 'react';

const routePrefixes = ['Route A', 'Route B', 'Route C', 'Route D', 'Route E', 'Route F'];

const Module = ({ module, courseID }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  // Start with the hardcoded options immediately
  const [liveOptions, setLiveOptions] = useState(module.options || []);

  useEffect(() => {
    // If it's an elective and has a label, try to fetch the live data
    if (module.type === "Elective Choice" && module.akariLabel && courseID) {
      fetch(`/api/fetch-group?courseId=${courseID}&label=${encodeURIComponent(module.akariLabel)}`)
        .then(res => res.json())
        .then(data => {
          if (data && data.length > 0) {
            const formatted = data.map(m => ({
              code: m.code,
              name: m.title // Akari returns title, we need name
            }));
            setLiveOptions(formatted);
          }
        })
        .catch(err => console.error("Sync failed:", err));
    }
  }, [module.akariLabel, courseID]);

  const handleMouseEnter = () => {
    if (module.type === "Elective Choice" || module.type === "Route Choice") {
      setIsExpanded(true);
    }
  };

  const handleMouseLeave = () => {
    setIsExpanded(false);
  };

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
          {/* If there's an akariLabel and we have no data yet, show syncing */}
          {module.akariLabel && liveOptions.length === 0 ? (
            <li>Syncing with Akari...</li>
          ) : (
            liveOptions.map((option, index) => (
              <li key={index}>
                {module.type === "Elective Choice" && `${option.code}: ${option.name}`}
                {module.type === "Route Choice" && (
                  `${routePrefixes[index]}: ${option.code}: ${option.name || option.title}`
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