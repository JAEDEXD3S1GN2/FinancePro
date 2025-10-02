import React from "react";
import Unavailable from "../Error/Error";
import "./More.css";
import {
  FaMoneyCheckAlt,
  FaMobileAlt,
  FaShareAlt,
  FaQrcode,
  FaArrowAltCircleUp,
} from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const More = () => {
  const NavigateTo = useNavigate();

  const actions = [
    {
      name: "Transfer",
      icon: <FaArrowAltCircleUp />,
      color: "#4384f2",
      Link: "/Transfer",
    },
    {
      name: "Withdraw",
      icon: <FaMoneyCheckAlt />,
      color: "#f1aa1b",
      Link: "/Withdraw",
    },
    {
      name: "Top-Up",
      icon: <FaMobileAlt />,
      color: "#24c2b0",
      Link: "/TopUp",
    },
    {
      name: "Share",
      icon: <FaShareAlt />,
      color: "#af65f5",
      Link: "/Share",
    },
    {
      name: "Scan",
      icon: <FaQrcode />,
      color: "#2563eb",
      Link: "/Scan",
    },
  ];
  return (
    <div>
      <div className="quick-actions-page">
        <h1 className="title">Quick Actions</h1>
        <div className="actions-grid">
          {actions.map((action, index) => (
            <div
              className="action-card"
              key={index}
              style={{ background: action.color }}
              onClick={() => {
                NavigateTo(`${action.Link}`);
              }}
            >
              <div className="icon-wrapper">{action.icon}</div>
              <h2>{action.name}</h2>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default More;
