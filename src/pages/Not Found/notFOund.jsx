// components/NotFound.jsx
import React from 'react';
import '../Loading/Styles.css';

const NotFound = () => {
  return (
    <div className="fintech-error">
      <div className="error-graphic not-found"></div>
      <h1>404 - Page Not Found</h1>
      <p>Looks like your financial data went missing.</p>
    </div>
  );
};

export default NotFound;