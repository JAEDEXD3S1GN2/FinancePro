import React from "react";
import Unavailable from "../Error/Error";
import "./FinanceGoals.css";
import {
  FaPiggyBank,
  FaHome,
  FaCar,
  FaGraduationCap,
  FaPlane,
  FaBriefcase,
  FaHeart,
  FaUmbrellaBeach,
  FaSeedling,
} from "react-icons/fa";

const FinancialG = () => {
  const goals = [
    {
      icon: <FaPiggyBank />,
      name: "Build Emergency Fund",
      description: "Save money for unexpected expenses.",
    },
    {
      icon: <FaHome />,
      name: "Buy a House",
      description: "Plan and save for your dream home.",
    },
    {
      icon: <FaCar />,
      name: "Buy a Car",
      description: "Set aside funds for a new vehicle.",
    },
    {
      icon: <FaGraduationCap />,
      name: "Education Fund",
      description: "Save for yourself or your children’s education.",
    },
    {
      icon: <FaPlane />,
      name: "Travel & Vacation",
      description: "Plan your dream trips around the world.",
    },
    {
      icon: <FaBriefcase />,
      name: "Start a Business",
      description: "Gather capital to launch your own venture.",
    },
    {
      icon: <FaHeart />,
      name: "Wedding Fund",
      description: "Save for your big day and celebrations.",
    },
    {
      icon: "",
      name: "Retirement Savings",
      description: "Ensure a comfortable retirement.",
    },
    {
      icon: <FaUmbrellaBeach />,
      name: "Buy a Vacation Home",
      description: "Invest in a getaway property.",
    },
    {
      icon: <FaSeedling />,
      name: "Invest in Stocks",
      description: "Grow your wealth through smart investments.",
    },
  ];

  return (
    <div className="goals-page">
      <h1 className="goals-title">Set Your Financial Goals</h1>
      <p className="goals-description">
        Choose your goals and start planning your financial future with
        FinancePro.
      </p>
      <div className="goals-grid">
        {goals.map((goal, idx) => (
          <div
            key={idx}
            className="goal-card"
            tabIndex={0}
            role="button"
            aria-pressed="false"
          >
            <div className="goal-icon">{goal.icon}</div>
            <h3>{goal.name}</h3>
            <p>{goal.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FinancialG;
