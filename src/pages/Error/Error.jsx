// components/Unavailable.jsx
import React from 'react';
import '../Loading/Styles.css';

const Unavailable = () => {
  return (
    <div className="fintech-error">
      <div className="error-graphic unavailable"></div>
      <h1>503 - Service Unavailable</h1>
      <p>We're upgrading your financial experience. Please check back soon.</p>
    </div>
  );
};

export default Unavailable;