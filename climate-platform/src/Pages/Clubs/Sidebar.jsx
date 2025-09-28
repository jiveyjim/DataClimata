import React, { useState } from "react";

function Sidebar({ onSelect, activePage }) {
  const [isOpen, setIsOpen] = useState(true);
  const [showLevels, setShowLevels] = useState(false);

  const menuStyle = (key) => ({
    padding: "8px 6px",
    cursor: "pointer",
    color: activePage === key ? "#28a745" : "#000",
    fontWeight: activePage === key ? 700 : 500,
    borderRadius: 6,
  });

  return (
    <div style={{
      height: "100vh",
      background: "#fff",
      borderRight: "2px solid #000",
      boxSizing: "border-box",
      padding: 12
    }}>
      {/* Hamburger */}
      <div style={{ display: "flex", alignItems: "center", marginBottom: 8 }}>
        <button
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
          style={{
            background: "none", border: "none", padding: 0, cursor: "pointer",
            display: "flex", flexDirection: "column", justifyContent: "space-between", height: 26, width: 34
          }}
        >
          <span style={{ height: 3, background: "#000", display: "block", borderRadius: 2 }} />
          <span style={{ height: 3, background: "#000", display: "block", borderRadius: 2 }} />
          <span style={{ height: 3, background: "#000", display: "block", borderRadius: 2 }} />
        </button>
        {isOpen && <div style={{ marginLeft: 10, fontWeight: 800 }}>Menu</div>}
      </div>

      {isOpen && (
        <nav>
          <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
            <li style={menuStyle("dashboard")} onClick={() => { setShowLevels(false); onSelect("dashboard"); }}>
              Dashboard
            </li>

            <li style={{ marginTop: 8 }}>
              <div
                onClick={() => setShowLevels(s => !s)}
                style={{ ...menuStyle("data"), display: "flex", justifyContent: "space-between", alignItems: "center" }}
              >
                <span>Data Collection</span>
                <span style={{ fontSize: 12 }}>{showLevels ? "▲" : "▼"}</span>
              </div>

              {showLevels && (
                <ul style={{ listStyle: "none", paddingLeft: 16, marginTop: 8 }}>
                  <li style={menuStyle("data-primary")} onClick={() => onSelect("data-primary")}>Primary</li>
                  <li style={menuStyle("data-highschool")} onClick={() => onSelect("data-highschool")}>High School</li>
                  <li style={menuStyle("data-university")} onClick={() => onSelect("data-university")}>University</li>
                </ul>
              )}
            </li>

            <li style={{ marginTop: 12 }} onClick={() => { setShowLevels(false); onSelect("projects"); }}>
              <div style={menuStyle("projects")}>Projects</div>
            </li>

            <li style={{ marginTop: 12 }} onClick={() => { setShowLevels(false); onSelect("earnings"); }}>
              <div style={menuStyle("earnings")}>Earnings</div>
            </li>

            <li style={{ marginTop: 12 }} onClick={() => { setShowLevels(false); onSelect("profile"); }}>
              <div style={menuStyle("profile")}>Profile</div>
            </li>
          </ul>
        </nav>
      )}
    </div>
  );
}

export default Sidebar;
