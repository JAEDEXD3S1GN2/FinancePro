import React, { useState } from "react";
import "./settings.css";

export default function SettingsPage() {
  const [notificationsEnabled, setNotificationsEnabled] = useState(true);
  const [activeSection, setActiveSection] = useState("account");

  const settingsSections = {
    account: {
      title: "Account Settings",
      content: (
        <>
          <div className="setting-item">
            <label>Full Name</label>
            <input type="text" placeholder="John Doe" />
          </div>
          <div className="setting-item">
            <label>Email</label>
            <input type="email" placeholder="john@example.com" />
          </div>
        </>
      ),
    },
    security: {
      title: "Security",
      content: (
        <>
          <div className="setting-item">
            <label>Password</label>
            <button className="btn-secondary">Change Password</button>
          </div>
          <div className="setting-item">
            <label>Two-Factor Authentication</label>
            <button className="btn-secondary">Enable 2FA</button>
          </div>
        </>
      ),
    },
    notifications: {
      title: "Notifications",
      content: (
        <>
          <div className="setting-item toggle">
            <label>Email Notifications</label>
            <input
              type="checkbox"
              checked={notificationsEnabled}
              onChange={() => setNotificationsEnabled(!notificationsEnabled)}
            />
          </div>
        </>
      ),
    },
    privacy: {
      title: "Privacy",
      content: (
        <>
          <div className="setting-item">
            <label>Data Sharing</label>
            <select>
              <option>Allow</option>
              <option>Limited</option>
              <option>Do not share</option>
            </select>
          </div>
        </>
      ),
    },
    payments: {
      title: "Payment Methods",
      content: (
        <>
          <div className="setting-item">
            <label>Linked Cards</label>
            <button className="btn-secondary">Manage Cards</button>
          </div>
        </>
      ),
    },
    integrations: {
      title: "Integrations",
      content: (
        <>
          <div className="setting-item">
            <label>Connect to PayPal</label>
            <button className="btn-secondary">Connect</button>
          </div>
        </>
      ),
    },
  };

  return (
    <div className="settings-page">
      <aside className="settings-sidebar">
        {Object.keys(settingsSections).map((key) => (
          <button
            key={key}
            className={`sidebar-button ${
              activeSection === key ? "active" : ""
            }`}
            onClick={() => setActiveSection(key)}
          >
            <img
              src={`https://cdn.lordicon.com/${
                {
                  account: "dzynclvx",
                  security: "jmeomznp",
                  notifications: "lmrzupzs",
                  privacy: "aixyixwi",
                  payments: "kndkiwmf",
                  integrations: "kqcykqvp",
                }[key]
              }.json`}
              alt={`${key} icon`}
              className="sidebar-icon"
            />
            <span>{settingsSections[key].title}</span>
          </button>
        ))}
      </aside>

      <main className="settings-content">
        <h2>{settingsSections[activeSection].title}</h2>
        <div className="settings-form">
          {settingsSections[activeSection].content}
        </div>
      </main>
    </div>
  );
}
