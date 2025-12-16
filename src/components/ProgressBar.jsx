import React from 'react';

const ProgressBar = ({ progress, className = '' }) => {
  return (
    <div className={`progress-container ${className}`}>
      <div className="progress-bar">
        <div 
          className="progress-fill" 
          style={{ width: `${progress}%` }}
        />
      </div>
      <div className="progress-text">
        {progress}% Complete
      </div>
    </div>
  );
};

export default ProgressBar;