import React from "react";
import Unavailable from "../../Error/Error";
import "./MakeTransfer.css";
import { FaUniversity, FaExchangeAlt, FaArrowRight } from "react-icons/fa";

const Transfer = () => {
  return (
    <div className="transfer-page">
      <h1 className="transfer-title">Make a Transfer</h1>

      <div className="transfer-section">
        <div className="section-header">
          <FaUniversity className="section-icon" />
          <h2>To FinancePro Account</h2>
        </div>
        <form className="transfer-form">
          <input type="text" placeholder="Recipient Username" />
          <input type="number" placeholder="Amount" />
          <button type="submit">
            Send <FaArrowRight className="btn-icon" />
          </button>
        </form>
      </div>

      <div className="transfer-section">
        <div className="section-header">
          <FaExchangeAlt className="section-icon" />
          <h2>To Another FinancePro Account</h2>
        </div>
        <form className="transfer-form">
          <input type="text" placeholder="Account Number" />
          <input type="number" placeholder="Amount" />
          <button type="submit">
            Send <FaArrowRight className="btn-icon" />
          </button>
        </form>
      </div>

      <div className="transfer-section">
        <div className="section-header">
          <FaUniversity className="section-icon" />
          <h2>To Other Banks</h2>
        </div>
        <form className="transfer-form">
          <input type="text" placeholder="Bank Name" />
          <input type="text" placeholder="Account Number" />
          <input type="number" placeholder="Amount" />
          <button type="submit">
            Send <FaArrowRight className="btn-icon" />
          </button>
        </form>
      </div>
    </div>
  );
};

export default Transfer;
