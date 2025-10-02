import React from "react";
import "./SignUp.css";

const SignUp = () => {
  return (
    <>
      <div className="signup-container">
        <form className="signup-form">
          <h2>Create Your Account</h2>
          <p className="subtitle">Start managing your finances better</p>

          <input type="text" placeholder="Full Name" required />
          <input type="email" placeholder="Email Address" required />
          <input type="password" placeholder="Password" required />
          <input type="password" placeholder="Confirm Password" required />
          <button type="submit">Sign Up</button>

          <div className="footer-links">
            <a href="#">Already have an account?</a>
          </div>
        </form>
      </div>
    </>
  );
};

export default SignUp;
