import React from "react";

function Card({ title, value, icon }) {
  return (
    <div style={{
      background: "#ffffff",
      padding: 16,
      borderRadius: 10,
      boxShadow: "0 6px 18px rgba(0,0,0,0.04)",
      display: "flex",
      alignItems: "center",
      gap: 12,
      minWidth: 180
    }}>
      {icon && <img src={icon} alt={title} style={{ width: 44, height: 44 }} />}
      <div>
        <div style={{ fontSize: 13, color: "#000", marginBottom: 6 }}>{title}</div>
        <div style={{ fontSize: 18, fontWeight: 800, color: "#000" }}>{value}</div>
      </div>
    </div>
  );
}

export default Card;
