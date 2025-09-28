import React, { useEffect, useState } from "react";

export default function DataCollection({ level }) {
  const empty = { date: "", rainfall: "", temperature: "", windSpeed: "", humidity: "" };
  const [form, setForm] = useState(empty);
  const [records, setRecords] = useState([]);

  useEffect(() => {
    if (!level) {
      setRecords([]);
      setForm(empty);
      return;
    }
    const saved = localStorage.getItem(`records-${level}`);
    setRecords(saved ? JSON.parse(saved) : []);
    setForm(empty);
  }, [level]);

  useEffect(() => {
    if (!level) return;
    localStorage.setItem(`records-${level}`, JSON.stringify(records));
  }, [records, level]);

  const inputStyle = {
    width: "100%", padding: 8, borderRadius: 6, border: "1px solid #000", background: "#f9f9f9", color: "#000", marginBottom: 8, fontWeight: 600
  };

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const submit = (e) => {
    e.preventDefault();
    if (!level) return alert("Select level from the sidebar.");
    setRecords(r => [{ ...form }, ...r]);
    setForm(empty);
  };

  const clearAll = () => {
    if (!level) return;
    if (!confirm("Clear saved records for this level?")) return;
    setRecords([]);
    localStorage.removeItem(`records-${level}`);
  };

  const downloadCSV = () => {
    if (!level || records.length === 0) return;
    const headers = ["Date", "Rainfall", "Temperature"];
    if (level !== "Primary") headers.push("Wind Speed");
    if (level === "University") headers.push("Humidity");
    const rows = [headers.join(",")].concat(
      records.map(r => {
        const row = [r.date || "", r.rainfall || "", r.temperature || ""];
        if (level !== "Primary") row.push(r.windSpeed || "");
        if (level === "University") row.push(r.humidity || "");
        return row.join(",");
      })
    );
    const csv = "data:text/csv;charset=utf-8," + rows.join("\n");
    const link = document.createElement("a");
    link.href = encodeURI(csv);
    link.download = `${level}_records.csv`;
    link.click();
  };

  const renderFields = () => {
    if (!level) return null;
    return (
      <>
        <label style={{ color: "#000" }}>Date</label>
        <input name="date" type="date" value={form.date} onChange={handleChange} style={inputStyle} required />

        <label style={{ color: "#000" }}>Rainfall (mm)</label>
        <input name="rainfall" type="number" value={form.rainfall} onChange={handleChange} style={inputStyle} required />

        <label style={{ color: "#000" }}>Temperature (°C)</label>
        <input name="temperature" type="number" value={form.temperature} onChange={handleChange} style={inputStyle} required />

        {level !== "Primary" && (
          <>
            <label style={{ color: "#000" }}>Wind Speed (km/h)</label>
            <input name="windSpeed" type="number" value={form.windSpeed} onChange={handleChange} style={inputStyle} />
          </>
        )}

        {level === "University" && (
          <>
            <label style={{ color: "#000" }}>Humidity (%)</label>
            <input name="humidity" type="number" value={form.humidity} onChange={handleChange} style={inputStyle} />
          </>
        )}
      </>
    );
  };

  return (
    <div style={{ paddingBottom: 40 }}>
      <h2 style={{ color: "#000" }}>{level ? `${level} Data Collection` : "Data Collection"}</h2>

      {!level && <p style={{ color: "#000" }}>Open the sidebar → Data Collection → select level (Primary / High School / University)</p>}

      <form onSubmit={submit} style={{ maxWidth: 520, display: "flex", flexDirection: "column" }}>
        {renderFields()}
        {level && <button type="submit" style={submitStyle}>Submit</button>}
      </form>

      {records.length > 0 && (
        <div style={{ marginTop: 18 }}>
          <div style={{ display: "flex", gap: 8, marginBottom: 10 }}>
            <button onClick={clearAll} style={dangerStyle}>Clear Data</button>
            <button onClick={downloadCSV} style={downloadStyle}>Download CSV</button>
          </div>

          <table border="1" cellPadding="8" style={{ borderCollapse: "collapse", width: "100%" }}>
            <thead style={{ background: "#f2f2f2" }}>
              <tr>
                <th>Date</th>
                <th>Rainfall</th>
                <th>Temperature</th>
                {level !== "Primary" && <th>Wind Speed</th>}
                {level === "University" && <th>Humidity</th>}
              </tr>
            </thead>
            <tbody>
              {records.map((r, i) => (
                <tr key={i}>
                  <td>{r.date}</td>
                  <td>{r.rainfall}</td>
                  <td>{r.temperature}</td>
                  {level !== "Primary" && <td>{r.windSpeed}</td>}
                  {level === "University" && <td>{r.humidity}</td>}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}

const submitStyle = {
  marginTop: 8, padding: "10px 12px", background: "#28a745", color: "#fff", border: "none", borderRadius: 6, width: 120, fontWeight: 700, cursor: "pointer"
};
const dangerStyle = { padding: "8px 10px", background: "red", color: "#fff", border: "none", borderRadius: 6, cursor: "pointer" };
const downloadStyle = { padding: "8px 10px", background: "#007bff", color: "#fff", border: "none", borderRadius: 6, cursor: "pointer" };
