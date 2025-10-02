import React from "react";
import "./footer.css";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <h2>FinSolve — Empowering Your Financial Future</h2>
        <p>
          At FinSolve, we’re committed to providing cutting-edge financial
          technology solutions tailored to meet your unique needs. Whether
          you’re managing personal finances or running a business, our platform
          offers seamless, secure, and smart tools to help you navigate the
          complex world of finance with confidence. Our team is dedicated to
          innovation and excellence, ensuring your experience is not just
          functional but exceptional. Join thousands of satisfied users who
          trust FinSolve for their financial success.
        </p>

        <div className="footer-links">
          <a href="/Signin">Sign In</a>
          <a href="/SignUp">Sign Up</a>
          <a href="/contact">Contact Us</a>
          <a href="/privacy">Privacy Policy</a>
        </div>

        <p className="footer-copy">
          &copy; {new Date().getFullYear()} FinSolve. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
