import React from "react";

function Navbar() {
  return (
    <div className="navbar">
      <div>
        <h1>Social Media Dashboard</h1>
        <p>Total Followers: 23,004</p>
      </div>

      <div className="navbar-mode">
        <p>Dark Mode</p>
        <label class="switch">
          <input type="checkbox" />
          <span class="slider round"></span>
        </label>
      </div>
    </div>
  );
}

export default Navbar;
