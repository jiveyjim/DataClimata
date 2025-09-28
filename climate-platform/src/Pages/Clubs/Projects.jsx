import React, { useState } from "react";

export default function Projects() {
  const [selected, setSelected] = useState("");
  const ongoing = ["Rainfall Monitoring", "Tree Plantation Drive", "Plastic Waste Survey", "Soil Acidity Check"];
  const completed = ["Local Climate Awareness Campaign"];

  const toggle = (t) => setSelected(s => s === t ? "" : t);

  return (
    <div style={{ paddingBottom: 40 }}>
      <h2>Projects</h2>
      <div style={{ marginTop: 12 }}>
        <button onClick={() => toggle("ongoing")} style={btn}>Ongoing Projects</button>
        <button onClick={() => toggle("completed")} style={{ ...btn, marginLeft: 8, background: "#6c757d" }}>Completed Projects</button>
      </div>

      <div style={{ marginTop: 18 }}>
        {selected === "ongoing" && ongoing.map((p,i) => <div key={i} style={ongoingStyle}>{p}</div>)}
        {selected === "completed" && completed.map((p,i) => <div key={i} style={completedStyle}>{p}</div>)}
        {!selected && <p style={{ color: "#666" }}>Click a button above to view the list.</p>}
      </div>
    </div>
  );
}

const btn = { padding: "8px 12px", background: "#28a745", color: "#fff", border: "none", borderRadius: 6, cursor: "pointer", fontWeight: 700 };
const ongoingStyle = { background: "#f2f9f3", borderLeft: "5px solid #28a745", padding: 12, borderRadius: 8, marginBottom: 8, color: "#155724", fontWeight: 700 };
const completedStyle = { background: "#f2f2f2", borderLeft: "5px solid #6c757d", padding: 12, borderRadius: 8, marginBottom: 8, color: "#343a40", fontWeight: 700 };
