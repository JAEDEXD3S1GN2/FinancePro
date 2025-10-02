import React from "react";
import "./ForgotP.css";
import { Link } from "react-router-dom";

const ForgotP = () => {
  return (
    <div className="forgot-container">
      <div className="card-3d">
        <div className="icon-area">
          <img
            src="https://img.icons8.com/3d-fluency/94/lock.png"
            alt="lock-icon"
            className="lock-icon"
          />
        </div>
        <h2>Reset Your Password</h2>
        <p className="subtitle">
          Enter your email address and we’ll send you a link to reset your
          password.
        </p>
        <form>
          <input type="email" placeholder="Email Address" required />
          <button type="submit">Send Reset Link</button>
        </form>
        <div className="footer-links">
          <Link to="/Signin">Back to Sign In</Link>
        </div>
      </div>
    </div>
  );
};

export default ForgotP;
