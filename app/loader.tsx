import React from 'react';
import './loader.css';

const Loader: React.FC = () => {
  return (
    <div className="loader-container bg-celeste">
      <div className="lock">
        <div className="lock-body"></div>
        <div className="lock-shackle"></div>
      </div>
      <div className="key"></div>
    </div>
  );
};

export default Loader;
  