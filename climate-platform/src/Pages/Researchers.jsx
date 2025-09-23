import { useState } from "react";
import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer,
  BarChart, Bar, PieChart, Pie, Cell
} from "recharts";

// Dummy datasets
const temperatureData = [
  { year: 2018, temp: 26 },
  { year: 2019, temp: 27 },
  { year: 2020, temp: 29 },
  { year: 2021, temp: 30 },
  { year: 2022, temp: 31 },
  { year: 2023, temp: 33 },
];

const rainfallData = [
  { month: "Jan", rainfall: 120 },
  { month: "Feb", rainfall: 80 },
  { month: "Mar", rainfall: 150 },
  { month: "Apr", rainfall: 200 },
  { month: "May", rainfall: 90 },
];

const wasteData = [
  { name: "Plastic", value: 45 },
  { name: "Organic", value: 30 },
  { name: "Metal", value: 15 },
  { name: "Other", value: 10 },
];

const COLORS = ["#FF8042", "#00C49F", "#0088FE", "#FFBB28"];

function Researchers() {
  const [uploads, setUploads] = useState([
    { id: 1, name: "Soil Analysis Report.pdf" },
    { id: 2, name: "Climate Change Policy.docx" }
  ]);
  const [file, setFile] = useState(null);

  // New: region selector
  const [region, setRegion] = useState("Nairobi");

  const handleUpload = () => {
    if (file) {
      setUploads([...uploads, { id: uploads.length + 1, name: file.name }]);
      setFile(null);
      alert("✅ File uploaded (demo only)");
    }
  };

  const handleDownload = () => {
    alert("⬇️ Exported dataset (demo only)");
  };

  return (
    <div >
      <h1>📊 Researchers Dashboard</h1>

      {/* Region selector */}
      <div style={{ margin: "10px 0" }}>
        <label><b>Select Region:</b> </label>
        <select
          value={region}
          onChange={(e) => setRegion(e.target.value)}
          style={{ padding: "6px", marginLeft: "10px" }}
        >
          <option value="Nairobi">Nairobi</option>
          <option value="Mombasa">Mombasa</option>
          <option value="Kisumu">Kisumu</option>
          <option value="Eldoret">Eldoret</option>
          <option value="Garissa">Garissa</option>
        </select>
      </div>

      <p><i>Showing climate data for <b>{region}</b></i></p>

      {/* Charts Section */}
      <section style={styles.section}>
        <h2>Climate Trends</h2>

        <h3>🌡️ Temperature Trends</h3>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={temperatureData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="year" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="temp" stroke="#ff7300" />
          </LineChart>
        </ResponsiveContainer>

        <h3>🌧️ Rainfall Records</h3>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={rainfallData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="rainfall" fill="#007bff" />
          </BarChart>
        </ResponsiveContainer>

        <h3>♻️ Waste Breakdown</h3>
        <ResponsiveContainer width="100%" height={300}>
          <PieChart>
            <Pie data={wasteData} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={100} label>
              {wasteData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <Tooltip />
          </PieChart>
        </ResponsiveContainer>
      </section>

      {/* Data Table */}
      <section style={styles.section}>
        <h2>📋 Sample Climate Data</h2>
        <table border="1" cellPadding="10" style={{ width: "100%", borderCollapse: "collapse" }}>
          <thead>
            <tr style={{ background: "#0fdd2bff" }}>
              <th>Year</th>
              <th>Avg Temp (°C)</th>
              <th>Rainfall (mm)</th>
              <th>Soil pH</th>
              <th>Plastic Waste Index</th>
            </tr>
          </thead>
          <tbody>
            <tr><td>2019</td><td>27</td><td>120</td><td>6.5</td><td>40</td></tr>
            <tr><td>2020</td><td>29</td><td>135</td><td>6.8</td><td>42</td></tr>
            <tr><td>2021</td><td>30</td><td>140</td><td>6.7</td><td>38</td></tr>
            <tr><td>2022</td><td>31</td><td>150</td><td>6.6</td><td>36</td></tr>
            <tr><td>2023</td><td>33</td><td>160</td><td>6.5</td><td>34</td></tr>
          </tbody>
        </table>
        <button onClick={handleDownload} style={styles.button}>⬇️ Export Data</button>
      </section>

      {/* Uploads */}
      <section style={styles.section}>
        <h2>⬆️ Upload Research</h2>
        <input type="file" onChange={e => setFile(e.target.files[0])} />
        <button onClick={handleUpload} style={styles.button}>Upload</button>

        <h3>My Uploads</h3>
        <ul>
          {uploads.map(u => (
            <li key={u.id}>{u.name} <button style={styles.smallBtn}>Download</button></li>
          ))}
        </ul>
      </section>

      {/* News/Insights */}
      <section style={styles.section}>
        <h2>📰 Recent Climate Updates</h2>
        <ul>
          <li>2023: New law on renewable energy subsidies in Kenya</li>
          <li>2024: Citizen reports highlight drought in Northern Kenya</li>
          <li>2025: Coastal schools start plastic waste monitoring projects</li>
        </ul>
      </section>
    </div>
  );
}

const styles = {
  section: { margin: "20px 0", padding: "15px", border: "1px solid #ddd", borderRadius: "8px" },
  button: { marginTop: "10px", padding: "8px 12px", background: "#2e7d32", color: "white", border: "none", borderRadius: "5px" },
  smallBtn: { marginLeft: "10px", padding: "4px 8px" }
};

export default Researchers;
