import React, { useEffect, useState } from "react";
import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  BarChart,
  Bar,
  ResponsiveContainer
} from "recharts";
import "./Farmers.css";

export default function App() {
  const [notifications, setNotifications] = useState([
    { id: 1, text: "Tree planting this Saturday at 9AM — meet at the school gate.", time: "2h ago" },
    { id: 2, text: "New data quality tips available in Resources.", time: "1 day ago" }
  ]);

  const [activity, setActivity] = useState([
    { id: 1, text: "Kampala Primary recorded 12mm rainfall", time: "Today 08:20" },
    { id: 2, text: "Green High submitted temperature data", time: "Yesterday 14:12" },
  ]);

  const stats = { institutions: 18, trees: 540, projects: 34, datapoints: 4200, students: 120 };

  const achievements = [
    { title: "Data Points", value: "4,200", detail: "Collected by students" },
    { title: "Trees Planted", value: "540", detail: "Across partner schools" },
    { title: "Active Clubs", value: "18", detail: "Schools running Climate Cadets" }
  ];

  const regionsData = {
    Nairobi: [
      { month: "Jan", Rainfall: 120, Temperature: 25, Humidity: 70 },
      { month: "Feb", Rainfall: 80, Temperature: 27, Humidity: 65 },
      { month: "Mar", Rainfall: 150, Temperature: 28, Humidity: 72 },
    ],
    Mombasa: [
      { month: "Jan", Rainfall: 180, Temperature: 30, Humidity: 80 },
      { month: "Feb", Rainfall: 200, Temperature: 32, Humidity: 85 },
      { month: "Mar", Rainfall: 160, Temperature: 31, Humidity: 78 },
    ],
    Eldoret: [
      { month: "Jan", Rainfall: 90, Temperature: 22, Humidity: 65 },
      { month: "Feb", Rainfall: 70, Temperature: 23, Humidity: 60 },
      { month: "Mar", Rainfall: 100, Temperature: 24, Humidity: 68 },
    ],
  };

  const farmingTips = {
    Nairobi: [
      "Plant maize during March for best yields.",
      "Use drought-resistant crops in dry months.",
    ],
    Mombasa: [
      "Plant coconuts for best growth.",
      "Monitor salt content in soil.",
    ],
    Eldoret: [
      "Plant wheat during April.",
      "Rotate crops every season.",
    ],
  };

  const [region, setRegion] = useState("Nairobi");

  const dismiss = (id) => setNotifications(n => n.filter(x => x.id !== id));
  const addSampleActivity = () => setActivity(a => [{ id: Date.now(), text: "Sample: School recorded a 2°C drop overnight", time: "Just now" }, ...a].slice(0, 50));
  const clearActivity = () => { if (!confirm("Clear activity feed?")) return; setActivity([]); };

  return (
    <div className="app">
      {/* Header */}
      <header>
        <h1 className="title">Farmers Dashboard</h1>
        <p className="intro">Welcome! This dashboard gives you climate data, farming tips, and activity updates.</p>
        <select
          value={region}
          onChange={(e) => setRegion(e.target.value)}
          className="region-select"
        >
          {Object.keys(regionsData).map((reg) => (
            <option key={reg} value={reg}>{reg}</option>
          ))}
        </select>
      </header>

      {/* Stats */}
      <section className="stats-section">
        <div className="stat-card">Institutions: {stats.institutions}</div>
        <div className="stat-card">Trees Planted: {stats.trees}</div>
        <div className="stat-card">Projects: {stats.projects}</div>
        <div className="stat-card">Data Points: {stats.datapoints}</div>
        <div className="stat-card">Students: {stats.students}</div>
      </section>

      {/* Notifications + Achievements */}
      <section className="notifications-achievements">
        <div className="notifications">
          <h2>Notifications</h2>
          {notifications.length === 0 && <div>No new notifications</div>}
          {notifications.map(n => (
            <div key={n.id} className="notification-item">
              <span>{n.text}</span>
              <span className="time">{n.time}</span>
              <button onClick={() => dismiss(n.id)}>Dismiss</button>
            </div>
          ))}
        </div>

        <div className="achievements">
          <h2>Achievements</h2>
          {achievements.map((a, i) => (
            <div key={i} className="achievement-item">
              <strong>{a.title}</strong>: {a.value} <br />
              <small>{a.detail}</small>
            </div>
          ))}
        </div>
      </section>

      {/* Charts */}
      <section className="chart-section">
        <h2>{region} Climate Data</h2>
        <div className="chart-container">
          <ResponsiveContainer width="100%" height={400}>
            <LineChart data={regionsData[region]}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" tick={{ fill: "#222" }} />
              <YAxis tick={{ fill: "#222" }} />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="Rainfall" stroke="#1abc9c" strokeWidth={3} />
              <Line type="monotone" dataKey="Temperature" stroke="#e67e22" strokeWidth={3} />
              <Line type="monotone" dataKey="Humidity" stroke="#3498db" strokeWidth={3} />
            </LineChart>
          </ResponsiveContainer>
        </div>

        <h2>{region} Rainfall Bar Chart</h2>
        <div className="chart-container">
          <ResponsiveContainer width="100%" height={400}>
            <BarChart data={regionsData[region]}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" tick={{ fill: "#222" }} />
              <YAxis tick={{ fill: "#222" }} />
              <Tooltip />
              <Legend />
              <Bar dataKey="Rainfall" fill="#1abc9c" />
              <Bar dataKey="Temperature" fill="#e67e22" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </section>

      {/* Tips */}
      <section className="tips-section">
        <h2>Farming Tips for {region}</h2>
        <ul>
          {farmingTips[region].map((tip, i) => (
            <li key={i}>{tip}</li>
          ))}
        </ul>
      </section>

      {/* Recent Activity */}
      <section className="activity-section">
        <h2>Recent Activity</h2>
        <button onClick={addSampleActivity} className="small-btn">Add sample</button>
        <button onClick={clearActivity} className="small-btn clear-btn">Clear</button>
        <ul>
          {activity.length === 0 && <li>No activity yet.</li>}
          {activity.map(act => (
            <li key={act.id}><strong>{act.text}</strong> <span>{act.time}</span></li>
          ))}
        </ul>
      </section>

      {/* Footer */}
      <footer>
        <p>© 2025 Farmers Dashboard</p>
      </footer>
    </div>
  );
}
