import React from "react";
import "./Bills.css";
import {
  FaBolt,
  FaTv,
  FaWater,
  FaWifi,
  FaPhoneAlt,
  FaTrashAlt,
  FaFire,
  FaRegCreditCard,
} from "react-icons/fa";

const Bills = () => {
  const billsCategories = [
    {
      icon: <FaBolt />,
      name: "Electricity Bill",
      description: "Pay your electricity bills easily and securely.",
    },
    {
      icon: <FaTv />,
      name: "TV Subscription",
      description: "Renew your cable or satellite TV subscription.",
    },
    {
      icon: <FaWater />,
      name: "Water Bill",
      description: "Settle your water supply charges quickly.",
    },
    {
      icon: <FaWifi />,
      name: "Internet Bill",
      description: "Pay your internet provider on time.",
    },
    {
      icon: <FaPhoneAlt />,
      name: "Phone Bill",
      description: "Top up your landline or mobile phone bill.",
    },
    {
      icon: <FaTrashAlt />,
      name: "Waste Management",
      description: "Pay for local garbage collection services.",
    },
    {
      icon: <FaFire />,
      name: "Gas Bill",
      description: "Pay your cooking or heating gas bills.",
    },
    {
      icon: <FaRegCreditCard />,
      name: "Credit Card",
      description: "Pay your credit card dues easily.",
    },
  ];

  return (
    <div className="bills-page">
      <h1 className="bills-title">Pay Your Bills</h1>
      <p className="bills-description">
        Conveniently manage your bills with FinancePro. Select a category below
        to get started.
      </p>
      <div className="bills-grid">
        {billsCategories.map((bill, idx) => (
          <div
            key={idx}
            className="bill-card"
            tabIndex={0}
            role="button"
            aria-pressed="false"
          >
            <div className="bill-icon">{bill.icon}</div>
            <h3>{bill.name}</h3>
            <p>{bill.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Bills;
