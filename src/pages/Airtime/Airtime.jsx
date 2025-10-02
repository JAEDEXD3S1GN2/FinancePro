import React, { useState } from "react";
import "./Airtime.css";
import { FaSimCard, FaMoneyBillWave } from "react-icons/fa";

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

const Airtime = () => {
  const [number, setNumber] = useState("");
  const [network, setNetwork] = useState("");
  const [amount, setAmount] = useState("");

  const handleNumberChange = (e) => {
    const value = e.target.value;
    setNumber(value);
    setNetwork(detectNetwork(value));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Recharging ₦${amount} to ${number} (${network})`);
  };

  return (
    <div className="airtime-page">
      <h1 className="airtime-title">Buy Airtime</h1>
      <form className="airtime-form" onSubmit={handleSubmit}>
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
            placeholder="Enter amount"
          />
        </div>

        <button type="submit">
          Pay <FaMoneyBillWave className="btn-icon" />
        </button>
      </form>
    </div>
  );
};

export default Airtime;
