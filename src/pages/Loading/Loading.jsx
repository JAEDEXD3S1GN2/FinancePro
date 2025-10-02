// components/Loading.jsx
import React from 'react';
import './Styles.css';

const Loading = () => {
  return (
    <div className="fintech-loading">
      <div className="coin-spin"></div>
      <p>Securing Your Finances...</p>
    </div>
  );
};

export default Loading;