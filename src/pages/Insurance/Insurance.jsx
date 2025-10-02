import React from "react";
import "./Insurance.css";
import {
  FaShieldAlt,
  FaHeartbeat,
  FaCar,
  FaHome,
  FaUserShield,
  FaPlane,
  FaUmbrellaBeach,
  FaPaw,
  FaLaptop,
  FaBriefcase,
} from "react-icons/fa";

const Insurance = () => {
  const insuranceSchemes = [
    {
      icon: <FaShieldAlt />,
      name: "Health Insurance",
      description:
        "Comprehensive medical coverage for individuals and families.",
    },
    {
      icon: <FaHeartbeat />,
      name: "Life Insurance",
      description: "Secure your family’s future with flexible life plans.",
    },
    {
      icon: <FaCar />,
      name: "Auto Insurance",
      description: "Protect your vehicle from accidents, theft, and more.",
    },
    {
      icon: <FaHome />,
      name: "Home Insurance",
      description: "Coverage for damage or loss of your property.",
    },
    {
      icon: <FaUserShield />,
      name: "Personal Accident",
      description: "Covers expenses in case of accidental injuries.",
    },
    {
      icon: <FaPlane />,
      name: "Travel Insurance",
      description: "Coverage for unexpected incidents while traveling.",
    },
    {
      icon: <FaUmbrellaBeach />,
      name: "Holiday Insurance",
      description: "Protection for trip cancellations and disruptions.",
    },
    {
      icon: <FaPaw />,
      name: "Pet Insurance",
      description: "Healthcare coverage for your beloved pets.",
    },
    {
      icon: <FaLaptop />,
      name: "Gadget Insurance",
      description: "Covers loss or damage to personal electronics.",
    },
    {
      icon: <FaBriefcase />,
      name: "Business Insurance",
      description: "Protect your enterprise against various risks.",
    },
  ];

  return (
    <div className="insurance-page">
      <h1 className="insurance-title">Insurance Services</h1>
      <p className="insurance-description">
        Get protected with our diverse insurance plans tailored to meet your
        unique needs. Whether it's health, travel, or property, we've got you
        covered.
      </p>
      <div className="insurance-grid">
        {insuranceSchemes.map((scheme, index) => (
          <div key={index} className="insurance-card">
            <div className="insure-icon-wrapper">{scheme.icon}</div>
            <h3>{scheme.name}</h3>
            <p>{scheme.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Insurance;
