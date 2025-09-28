import React, { useEffect, useState } from "react";

export default function Profile() {
  const [profile, setProfile] = useState({ role: "", institution: "", contact: "" });

  useEffect(() => {
    const saved = localStorage.getItem("profile");
    if (saved) setProfile(JSON.parse(saved));
  }, []);

  const handleChange = (e) => setProfile({ ...profile, [e.target.name]: e.target.value });

  const save = () => {
    localStorage.setItem("profile", JSON.stringify(profile));
    alert("Profile saved");
  };

  const clear = () => {
    if (!confirm("Clear profile?")) return;
    setProfile({ role: "", institution: "", contact: "" });
    localStorage.removeItem("profile");
  };

  return (
    <div style={{ paddingBottom: 40 }}>
      <h2>Profile</h2>
      <div style={{ maxWidth: 520, display: "flex", flexDirection: "column", gap: 8 }}>
        <label style={{ color: "#000" }}>Role (Student / Teacher)</label>
        <input name="role" value={profile.role} onChange={handleChange} style={input} />

        <label style={{ color: "#000" }}>Institution</label>
        <input name="institution" value={profile.institution} onChange={handleChange} style={input} />

        <label style={{ color: "#000" }}>Contact (phone or email)</label>
        <input name="contact" value={profile.contact} onChange={handleChange} style={input} />

        <div style={{ display: "flex", gap: 8, marginTop: 8 }}>
          <button onClick={save} style={{ ...actionBtn, background: "#28a745" }}>Save Profile</button>
          <button onClick={clear} style={{ ...actionBtn, background: "red" }}>Clear</button>
        </div>

        {profile.institution && (
          <div style={{ marginTop: 12, background: "#f6f7f8", padding: 12, borderRadius: 8 }}>
            <div style={{ fontWeight: 800 }}>{profile.role} — {profile.institution}</div>
            <div style={{ color: "#555" }}>{profile.contact}</div>
          </div>
        )}
      </div>
    </div>
  );
}

const input = { padding: 8, borderRadius: 6, border: "1px solid #ccc", width: "100%" };
const actionBtn = { padding: "8px 12px", color: "#fff", border: "none", borderRadius: 6, cursor: "pointer" };
