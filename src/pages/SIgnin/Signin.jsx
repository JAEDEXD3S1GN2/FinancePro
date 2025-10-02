import React from "react";
import "./Signin.css";
import { Link } from "react-router-dom";

const Signin = () => {
  return (
    <>
      <div className="signin-container">
        <form className="signin-form">
          <h2>Welcome Back</h2>
          <p className="subtitle">Securely sign in to your account</p>

          <input type="email" placeholder="Email Address" required />
          <input type="password" placeholder="Password" required />
          <button type="submit">Sign In</button>

          <div className="footer-links">
            <Link to="/ForgotPassword">Forgot Password?</Link>
            <Link to="/SignUp">Create Account</Link>
          </div>
        </form>
      </div>
    </>
  );
};

export default Signin;
