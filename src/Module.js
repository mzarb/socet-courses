import React, { useState, useEffect } from 'react';

const routePrefixes = ['Route A', 'Route B', 'Route C', 'Route D', 'Route E', 'Route F'];

const Module = ({ module, courseID }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  // Keep the initial options from CY.js
  const [liveOptions, setLiveOptions] = useState(module.options || []);

  useEffect(() => {
    // ONLY fetch if it's an elective with a label
    if (module.type === "Elective Choice" && module.akariLabel && courseID) {
      fetch(`/api/fetch-group?courseId=${courseID}&label=${encodeURIComponent(module.akariLabel)}`)
        .then(res => res.json())
        .then(data => {
          if (data && data.length > 0) {
            const formatted = data.map(m => ({
              code: m.code,
              name: m.title // Map Akari 'title' to our 'name'
            }));
            setLiveOptions(formatted);
          }
        })
        .catch(err => console.error("Live fetch failed:", err));
    }
  }, [module.akariLabel, courseID, module.type]);

  const handleMouseEnter = () => setIsExpanded(true);
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

      {(module.type === "Elective Choice" || module.type === "Route Choice") && isExpanded && (
        <ul className="elective-options">
          {/* If it's an elective and we are still waiting for data */}
          {module.type === "Elective Choice" && module.akariLabel && liveOptions.length === 0 ? (
            <li className="loading-text">Syncing with Akari...</li>
          ) : (
            /* Otherwise, show whatever is in liveOptions (Scraped or Hardcoded) */
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