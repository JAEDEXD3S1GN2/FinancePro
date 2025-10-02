import React from "react";
import "./UserProfile.css";

const UserProfile = () => {
  return (
    <div className="Outermost">
      <div class="profile-container">
        <header class="profile-header">
          <h1>User Profile</h1>
        </header>

        <div class="profile-card">
          <div class="avatar-section">
            <img
              src="https://via.placeholder.com/100"
              alt="User Avatar"
              class="avatar"
            />
            <h2 class="username">Jane Doe</h2>
            <span class="badge">Premium User</span>
          </div>

          <div class="info-section">
            <div class="info-item">
              <label>Email:</label>
              <p>jane.doe@example.com</p>
            </div>
            <div class="info-item">
              <label>Phone:</label>
              <p>+123 456 7890</p>
            </div>
            <div class="info-item">
              <label>Account Balance:</label>
              <p class="balance">$12,540.00</p>
            </div>
            <div class="actions">
              <button class="btn primary">Edit Profile</button>
              <button class="btn secondary">Logout</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
