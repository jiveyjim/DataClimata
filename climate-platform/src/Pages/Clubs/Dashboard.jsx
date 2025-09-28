import React, { useEffect, useState } from "react";
import Card from "./card.jsx";
import schoolsIcon from "../../assets/schools.png";
import treeIcon from "../../assets/tree.png";
import projectsIcon from "../../assets/projects.png";
import dataIcon from "../../assets/data.png";
import studentsIcon from "../../assets/students.png";
import "./Clubs.css";

export default function Dashboard() {
  const [notifications, setNotifications] = useState(() => {
    const s = localStorage.getItem("dashboard-notifications");
    return s
      ? JSON.parse(s)
      : [
          {
            id: 1,
            text: "Tree planting this Saturday at 9AM — meet at the school gate.",
            time: "2h ago",
          },
          {
            id: 2,
            text: "New data quality tips available in Resources.",
            time: "1 day ago",
          },
        ];
  });

  useEffect(() => {
    localStorage.setItem(
      "dashboard-notifications",
      JSON.stringify(notifications)
    );
  }, [notifications]);

  const [activity, setActivity] = useState(() => {
    const s = localStorage.getItem("dashboard-activity");
    return s
      ? JSON.parse(s)
      : [
          {
            id: 1,
            text: "Kampala Primary recorded 12mm rainfall",
            time: "Today 08:20",
          },
          {
            id: 2,
            text: "Green High submitted temperature data",
            time: "Yesterday 14:12",
          },
        ];
  });

  useEffect(() => {
    localStorage.setItem("dashboard-activity", JSON.stringify(activity));
  }, [activity]);

  const dismiss = (id) =>
    setNotifications((n) => n.filter((x) => x.id !== id));

  const addSampleActivity = () =>
    setActivity((a) => [
      {
        id: Date.now(),
        text: "Sample: School recorded a 2°C drop overnight",
        time: "Just now",
      },
      ...a,
    ].slice(0, 50));

  const clearActivity = () => {
    if (!window.confirm("Clear activity feed?")) return;
    setActivity([]);
    localStorage.removeItem("dashboard-activity");
  };

  const stats = {
    institutions: 18,
    trees: 540,
    projects: 34,
    datapoints: 4200,
    students: 120,
  };

  const achievements = [
    { title: "Data Points", value: "4,200", detail: "Collected by students" },
    { title: "Trees Planted", value: "540", detail: "Across partner schools" },
    {
      title: "Active Clubs",
      value: "18",
      detail: "Schools running Climate Cadets",
    },
  ];

  return (
    <div style={{ paddingBottom: 40 }}>
      {/* Stats cards */}
      <div style={{ display: "flex", gap: 18, flexWrap: "wrap" }}>
        <Card title="Learning Institutions" value={stats.institutions} icon={schoolsIcon} />
        <Card title="Trees Planted" value={stats.trees} icon={treeIcon} />
        <Card title="Ongoing Projects" value={stats.projects} icon={projectsIcon} />
        <Card title="Data Points Collected" value={stats.datapoints} icon={dataIcon} />
        <Card title="Students" value={stats.students} icon={studentsIcon} />
      </div>

      {/* Notifications & Achievements */}
      <div style={{ display: "flex", gap: 18, marginTop: 24, flexWrap: "wrap" }}>
        {/* Notifications */}
        <div style={{ flex: "1 1 360px", minWidth: 300 }}>
          <h3 style={{ margin: 0, fontWeight: 800, color: "#000" }}>Notifications</h3>
          <div style={{ marginTop: 8, background: "#fff", border: "1px solid #ccc", padding: 12, borderRadius: 8 }}>
            {notifications.length === 0 && (
              <div style={{ color: "#666" }}>No new notifications</div>
            )}
            {notifications.map((n) => (
              <div
                key={n.id}
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  marginBottom: 12,
                }}
              >
                <div>
                  <div style={{ fontWeight: 700, color: "#000" }}>{n.text}</div>
                  <div style={{ color: "#666", fontSize: 12 }}>{n.time}</div>
                </div>
                <button
                  onClick={() => dismiss(n.id)}
                  style={{
                    background: "none",
                    border: "none",
                    color: "#007bff",
                    cursor: "pointer",
                  }}
                >
                  Dismiss
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Achievements */}
        <div style={{ flex: "1 1 260px", minWidth: 260 }}>
          <h3 style={{ margin: "0 0 8px", fontWeight: 800, color: "#000" }}>
            Achievements
          </h3>
          <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
            {achievements.map((a, i) => (
              <div
                key={i}
                style={{
                  background: "#f8f9fa",
                  padding: 12,
                  borderRadius: 8,
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <div>
                  <div style={{ fontWeight: 800, color: "#000" }}>{a.title}</div>
                  <div style={{ color: "#555", fontSize: 13 }}>{a.detail}</div>
                </div>
                <div
                  style={{
                    fontWeight: 900,
                    fontSize: 18,
                    color: "#000",
                  }}
                >
                  {a.value}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Activity */}
      <div style={{ marginTop: 28 }}>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <h3 style={{ margin: 0, fontWeight: 800, color: "#000" }}>
            Recent Activity
          </h3>
          <div style={{ display: "flex", gap: 8 }}>
            <button onClick={addSampleActivity} style={smallBtn}>
              Add sample
            </button>
            <button
              onClick={clearActivity}
              style={{ ...smallBtn, background: "red" }}
            >
              Clear
            </button>
          </div>
        </div>

        <div
          style={{
            marginTop: 10,
            background: "#fff",
            border: "1px solid #ccc",
            borderRadius: 8,
          }}
        >
          <ul style={{ listStyle: "none", margin: 0, padding: 0 }}>
            {activity.length === 0 && (
              <li style={{ padding: 12, color: "#666" }}>No activity yet.</li>
            )}
            {activity.map((act) => (
              <li
                key={act.id}
                style={{
                  padding: 12,
                  borderBottom: "1px solid #f1f1f1",
                  display: "flex",
                  justifyContent: "space-between",
                }}
              >
                <div style={{ color: "#000", fontWeight: 600 }}>{act.text}</div>
                <div style={{ color: "#777", fontSize: 12 }}>{act.time}</div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

const smallBtn = {
  padding: "8px 10px",
  background: "#28a745",
  color: "#fff",
  border: "none",
  borderRadius: 6,
  cursor: "pointer",
  fontWeight: 700,
};
