import React from "react";
import "./TopUp.css";
import { useNavigate } from "react-router-dom";

import {
  FaMobileAlt,
  FaDatabase,
  FaFileInvoiceDollar,
  FaShieldAlt,
} from "react-icons/fa";

const TopUp = () => {
  const NavigateTo = useNavigate();

  const categories = [
    {
      name: "Airtime",
      icon: <FaMobileAlt />,
      color: "#4384f2",
      Link: "/Airtime",
    },
    { name: "Data", icon: <FaDatabase />, color: "#24c2b0", Link: "/Data" },
    {
      name: "Insurance",
      icon: <FaShieldAlt />,
      color: "#af65f5",
      Link: "/Insurance",
    },
    {
      name: "Bills",
      icon: <FaFileInvoiceDollar />,
      color: "#f1aa1b",
      Link: "/Bills",
    },
  ];

  return (
    <div className="topup-page">
      <h1 className="topup-title">Top-Up Services</h1>
      <div className="topup-grid">
        {categories.map((cat, index) => (
          <div
            className="topup-card"
            key={index}
            style={{ backgroundColor: cat.color }}
            onClick={() => {
              NavigateTo(`${cat.Link}`);
            }}
          >
            <div className="topup-icon">{cat.icon}</div>
            <h2>{cat.name}</h2>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopUp;
