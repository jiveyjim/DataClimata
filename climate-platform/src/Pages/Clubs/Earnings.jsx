import React, { useEffect, useState } from "react";

export default function Earnings() {
  const [earnings, setEarnings] = useState([]);
  const [form, setForm] = useState({ source: "", amount: "", date: "" });

  useEffect(() => {
    const saved = localStorage.getItem("earnings");
    setEarnings(saved ? JSON.parse(saved) : []);
  }, []);

  useEffect(() => {
    localStorage.setItem("earnings", JSON.stringify(earnings));
  }, [earnings]);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const add = (e) => {
    e.preventDefault();
    if (!form.source || !form.amount) return alert("Provide source and amount");
    setEarnings(arr => [{ ...form, amount: parseFloat(form.amount) || 0 }, ...arr]);
    setForm({ source: "", amount: "", date: "" });
  };

  const clearAll = () => { if (!confirm("Clear all earnings?")) return; setEarnings([]); localStorage.removeItem("earnings"); };
  const total = earnings.reduce((s,it) => s + (Number(it.amount) || 0), 0);

  return (
    <div style={{ paddingBottom: 40 }}>
      <h2>Earnings</h2>
      <div style={{ marginBottom: 16 }}>
        <div style={{ background: "#28a745", color: "#fff", padding: 12, borderRadius: 10, width: 280, fontWeight: 800 }}>
          Total Earnings: ${total.toFixed(2)}
        </div>
      </div>

      <form onSubmit={add} style={{ display: "flex", gap: 8, flexWrap: "wrap", marginBottom: 18 }}>
        <input name="source" value={form.source} onChange={handleChange} placeholder="Source" style={input} />
        <input name="amount" value={form.amount} onChange={handleChange} placeholder="Amount" type="number" style={input} />
        <input name="date" value={form.date} onChange={handleChange} type="date" style={input} />
        <button type="submit" style={{ ...actionBtn, background: "#28a745" }}>Add</button>
      </form>

      <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
        {earnings.map((e,i) => (
          <div key={i} style={{ background: "#f0f0f0", padding: 12, borderRadius: 8, minWidth: 200 }}>
            <div style={{ fontWeight: 800 }}>{e.source}</div>
            <div>${Number(e.amount).toFixed(2)}</div>
            <div style={{ color: "#555" }}>{e.date}</div>
          </div>
        ))}
      </div>

      {earnings.length > 0 && <div style={{ marginTop: 16 }}><button onClick={clearAll} style={{ ...actionBtn, background: "red" }}>Clear All</button></div>}
    </div>
  );
}

const input = { padding: 8, borderRadius: 6, border: "1px solid #ccc", minWidth: 140 };
const actionBtn = { padding: "8px 12px", color: "#fff", border: "none", borderRadius: 6, cursor: "pointer" };
