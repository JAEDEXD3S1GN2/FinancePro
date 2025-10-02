import React from "react";
import "./Hero.css";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";

const Hero = () => {
  return (
    <>
      <div className="Hero-overall">
        <div className="home-container">
          {/* Hero Section */}
          <section className="hero-section">
            <div className="hero-text">
              <h1>Smarter Finances Start Here</h1>
              <p>
                Empower your financial journey with fast, secure, and
                intelligent banking solutions tailored just for you.
              </p>
              <button className="cta-button">Create Account</button>
            </div>
            <div className="hero-image">
              <img
                src="https://img.icons8.com/3d-fluency/94/bank-building.png"
                alt="Bank Icon"
              />
            </div>
          </section>

          {/* About Section */}
          <section className="about-section">
            <h2>What We're About</h2>
            <p>
              At <span className="brand">FinTrust</span>, we are redefining how
              people interact with money. Whether it's managing savings,
              investing, or making fast payments — our platform provides a
              seamless and intuitive experience, powered by modern technology
              and secured with cutting-edge encryption.
            </p>
            <div className="about-grid">
              <div className="about-card">
                <img
                  src="https://img.icons8.com/3d-fluency/64/money.png"
                  alt="icon"
                />
                <h4>Instant Transfers</h4>
                <p>
                  Send and receive money globally in seconds, with zero delays
                  and complete transparency.
                </p>
              </div>
              <div className="about-card">
                <img
                  src="https://img.icons8.com/3d-fluency/64/smartphone-tablet.png"
                  alt="icon"
                />
                <h4>Mobile First</h4>
                <p>
                  Manage everything from your phone — anytime, anywhere — with
                  top-notch mobile security.
                </p>
              </div>
              <div className="about-card">
                <img
                  src="https://img.icons8.com/3d-fluency/64/artificial-intelligence.png"
                  alt="icon"
                />
                <h4>AI Insights</h4>
                <p>
                  Smart recommendations and spending insights to help you grow
                  wealth and stay in control.
                </p>
              </div>
            </div>
          </section>

          {/* Benefits Section */}
          <section className="benefits-section">
            <h2>Why Choose Us?</h2>
            <ul className="benefit-list">
              <li>
                <span>🔐</span>Bank-level security with multi-factor
                authentication.
              </li>
              <li>
                <span>⚡</span>Lightning-fast transactions and low fees.
              </li>
              <li>
                <span>📈</span>Real-time insights, alerts, and budget tracking.
              </li>
              <li>
                <span>🧠</span>AI-driven financial advice and smart saving
                plans.
              </li>
              <li>
                <span>🌍</span>Global support and multilingual access.
              </li>
            </ul>
          </section>

          {/* Testimonials */}
          <section className="testimonial-section">
            <h2>What Our Users Are Saying</h2>
            <div className="testimonials">
              <div className="testimonial-card">
                <p>
                  "FinTrust completely changed how I handle money. The AI
                  suggestions are actually useful!"
                </p>
                <h5>- Adebayo A.</h5>
              </div>
              <div className="testimonial-card">
                <p>
                  "I switched from a big bank to this and honestly, it’s 10x
                  better. No hidden fees, ever."
                </p>
                <h5>- Chioma E.</h5>
              </div>
              <div className="testimonial-card">
                <p>
                  "I use the app every day to track my savings and goals. I feel
                  so much more in control now."
                </p>
                <h5>- Daniel M.</h5>
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="cta-section">
            <h2>Ready to Make Smarter Financial Moves?</h2>
            <p>
              Join thousands of people already managing their money better with
              FinTrust.
            </p>
            <button className="cta-button">Get Started Now</button>
          </section>
        </div>
      </div>
    </>
  );
};

export default Hero;
