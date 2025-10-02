// src/components/SwitchAccount.jsx
import React from "react";
import "./SwitchAcc.css";

const SwitchAccount = () => {
  return (
    <div className="switch-container">
      <div className="switch-card">
        <h2>Switch Account</h2>
        <p className="subtitle">Choose an account to continue</p>

        <div className="account-list">
          <div className="account-item">
            <img
              src="https://img.icons8.com/fluency/48/user-male-circle.png"
              alt="User"
            />
            <div>
              <h4>John Doe</h4>
              <p>john@example.com</p>
            </div>
          </div>

          <div className="account-item">
            <img
              src="https://img.icons8.com/fluency/48/user-female-circle.png"
              alt="User"
            />
            <div>
              <h4>Jane Smith</h4>
              <p>jane@finbank.com</p>
            </div>
          </div>
        </div>

        <button className="btn-primary">Use Another Account</button>
      </div>
    </div>
  );
};

export default SwitchAccount;
