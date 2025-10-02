import React, { useState } from "react";
import "./Navbar.css";
import { LogIn, UserPlus, CreditCard } from "lucide-react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      <Link to="/" className="navbar-logo">
        <CreditCard size={28} color="#1aaf9f" />
        <span>FinancePro</span>
      </Link>

      <div className={`navbar-links ${menuOpen ? "active" : ""}`}>
        <Link to="/Signin">
          <LogIn size={18} className="nav-icon" />
          Sign In
        </Link>
        <Link to="/SignUp">
          <UserPlus size={18} className="nav-icon" />
          Sign Up
        </Link>
      </div>

      <div
        className={`hamburger ${menuOpen ? "open" : ""}`}
        onClick={() => setMenuOpen(!menuOpen)}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>
    </nav>
  );
};

export default Navbar;
