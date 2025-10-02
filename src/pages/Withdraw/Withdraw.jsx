import React from "react";
import "./Withdraw.css";
import { FaUniversity, FaArrowCircleDown } from "react-icons/fa";

const Withdraw = () => {
  return (
    <div className="withdraw-page">
      <h1 className="withdraw-title">Withdraw Funds</h1>

      <div className="withdraw-section">
        <div className="section-header">
          <FaUniversity className="section-icon" />
          <h2>To Bank Account</h2>
        </div>
        <form className="withdraw-form">
          <input type="text" placeholder="Bank Name" />
          <input type="text" placeholder="Account Number" />
          <input type="number" placeholder="Amount" />
          <button type="submit">
            Withdraw <FaArrowCircleDown className="btn-icon" />
          </button>
        </form>
      </div>
    </div>
  );
};

export default Withdraw;
