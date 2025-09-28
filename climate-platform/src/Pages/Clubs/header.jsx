import React from "react";

function Header({ children }) {
  return (
    <div style={{
      padding: "6px 0",
      marginBottom: 12,
      fontSize: 22,
      fontWeight: 800,
      color: "#28a745",
      textTransform: "uppercase",
      letterSpacing: 0.6
    }}>
      {children || "CLIMATE CADETS CLUB"}
    </div>
  );
}

export default Header;
