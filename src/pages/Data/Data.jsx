import React, { useState } from "react";
import Unavailable from "../Error/Error";
import "./Data.css";
import { FaSimCard, FaWifi, FaMoneyBillWave } from "react-icons/fa";

const detectNetwork = (number) => {
  if (!number) return "";
  const patterns = {
    MTN: [
      /^0803/,
      /^0806/,
      /^0810/,
      /^0813/,
      /^0814/,
      /^0816/,
      /^0903/,
      /^0906/,
      /^0703/,
      /^0706/,
      /^0913/,
      /^0916/,
    ],
    GLO: [/^0805/, /^0807/, /^0811/, /^0815/, /^0905/, /^0705/],
    Airtel: [
      /^0802/,
      /^0808/,
      /^0812/,
      /^0701/,
      /^0902/,
      /^0907/,
      /^0901/,
      /^0912/,
    ],
    "9Mobile": [/^0809/, /^0817/, /^0818/, /^0909/, /^0908/],
  };
  for (const [network, regexList] of Object.entries(patterns)) {
    if (regexList.some((regex) => regex.test(number))) {
      return network;
    }
  }
  return "Unknown";
};

const dataPlans = [
  { label: "500MB", price: "₦100" },
  { label: "1GB", price: "₦200" },
  { label: "2GB", price: "₦350" },
  { label: "3GB", price: "₦500" },
  { label: "4GB", price: "₦650" },
  { label: "5GB", price: "₦800" },
  { label: "10GB", price: "₦1500" },
  { label: "15GB", price: "₦2200" },
  { label: "20GB", price: "₦3000" },
  { label: "40GB", price: "₦5500" },
];

const Data = () => {
  const [number, setNumber] = useState("");
  const [network, setNetwork] = useState("");
  const [amount, setAmount] = useState("");

  const handleNumberChange = (e) => {
    const value = e.target.value;
    setNumber(value);
    setNetwork(detectNetwork(value));
  };

  const handlePlanClick = (price) => {
    setAmount(price.replace("₦", ""));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Subscribing data of ₦${amount} to ${number} (${network})`);
  };

  return (
    <div className="data-page">
      <h1 className="data-title">Buy Data</h1>
      <form className="data-form" onSubmit={handleSubmit}>
        <div className="input-group">
          <label>Phone Number</label>
          <input
            type="text"
            maxLength="11"
            value={number}
            onChange={handleNumberChange}
            placeholder="Enter phone number"
          />
          {network && (
            <div className="network-detect">
              <FaSimCard />{" "}
              {network === "Unknown" ? "Invalid Network" : network}
            </div>
          )}
        </div>

        <div className="input-group">
          <label>Amount</label>
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            placeholder="Enter amount or choose below"
          />
        </div>

        <button type="submit">
          Pay <FaMoneyBillWave className="btn-icon" />
        </button>
      </form>

      <h2 className="plan-title">Choose a Data Plan</h2>
      <div className="plans-grid">
        {dataPlans.map((plan, idx) => (
          <div
            key={idx}
            className="plan-card"
            onClick={() => handlePlanClick(plan.price)}
          >
            <FaWifi className="plan-icon" />
            <h3>{plan.label}</h3>
            <p>{plan.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Data;
