import React from 'react';
import './loader.scss';

const PageLoader = () => {
  return (
    <div className="grid-loader-container">
      <div className="grid-loader">
        {[...Array(9)].map((_, index) => (
          <div key={index} className="grid-item"></div>
        ))}
      </div>
      <p>Loading details...</p>
    </div>
  );
};

export default PageLoader;
