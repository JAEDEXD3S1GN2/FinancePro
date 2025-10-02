import React, { useState } from "react";
import "./Security.css";

const Security = () => {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="security-page">
      <header className="security-header">
        <h1>Security & Privacy</h1>
        <p>
          Your safety is our top priority. Discover how we protect your data.
        </p>
      </header>

      <section className="security-grid">
        <div className="security-card animate-fade">
          <img
            src="https://cdn.lordicon.com/rzbxwnvi.json"
            alt="Encryption"
            className="icon-3d"
          />
          <h2>End-to-End Encryption</h2>
          <p>
            We use AES-256 and TLS 1.3 encryption standards to keep your
            transactions and personal data secure from prying eyes.
          </p>
        </div>

        <div className="security-card animate-slide-up">
          <img
            src="https://cdn.lordicon.com/egmlnyku.json"
            alt="Authentication"
            className="icon-3d"
          />
          <h2>Biometric Authentication</h2>
          <p>
            Login using fingerprint or facial recognition across all supported
            devices for maximum convenience and security.
          </p>
        </div>

        <div className="security-card animate-slide-left">
          <img
            src="https://cdn.lordicon.com/hrqwmuhr.json"
            alt="Monitoring"
            className="icon-3d"
          />
          <h2>Real-Time Monitoring</h2>
          <p>
            Our AI-powered threat detection system constantly scans for
            suspicious activities and notifies you instantly.
          </p>
        </div>

        <div className="security-card animate-zoom-in">
          <img
            src="https://cdn.lordicon.com/gqdnbnwt.json"
            alt="Multi-Factor Auth"
            className="icon-3d"
          />
          <h2>Multi-Factor Authentication</h2>
          <p>
            Every login requires a unique passcode from your registered device
            to prevent unauthorized access.
          </p>
        </div>
      </section>

      <section className="expandable">
        <h2 onClick={() => setExpanded(!expanded)} className="expand-toggle">
          {expanded ? "Hide Advanced Features ▲" : "View Advanced Features ▼"}
        </h2>

        {expanded && (
          <div className="advanced-features animate-fade-in">
            <ul>
              <li>🔒 Zero Trust Architecture for internal operations</li>
              <li>🧠 AI Behavioral Risk Engines</li>
              <li>📜 Blockchain-based audit trails</li>
              <li>☁️ Cloudflare + Geo-redundant firewalls</li>
              <li>🧬 Continuous Identity Verification (KYC + Liveness)</li>
            </ul>
          </div>
        )}
      </section>

      <footer className="security-footer">
        <p>&copy; 2025 Fintrust Inc. — All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Security;
