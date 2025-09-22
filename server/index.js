// server/index.js
import express from "express";
import cors from "cors";
import mysql from "mysql2";
import dotenv from "dotenv";

dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());

// MySQL connection
const db = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
});

db.connect((err) => {
  if (err) throw err;
  console.log("✅ MySQL Connected...");
});

// Test route
app.get("/", (req, res) => {
  res.send("Hello from backend!");
});

app.listen(5000, () => console.log("🚀 Server running on port 5000"));
