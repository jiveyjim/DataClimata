// src/Components/Footer.jsx
import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Left: Branding */}
        <div className="footer-brand">
          <h3>DataClimata</h3>
          <p>Turning local data into global climate action 🌍</p>
        </div>


        {/* Right: Copyright */}
        <div className="footer-copy">
          <p>© {new Date().getFullYear()} DataClimata. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
