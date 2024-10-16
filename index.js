import express from "express";
import { config } from "dotenv";
import pg from "pg";

config();

const app = express();

const pool = new pg.Pool({
  connectionString: process.env.DATABASE_URL,
  connectionTimeoutMillis: 20000, // Wait 20 seconds before timing out
  idleTimeoutMillis: 30000, // Idle clients timeout after 30 seconds
  ssl: true,
});

app.get("/", (req, res) => {
  res.send("ok now is working now");
});

app.get("/pin", async (req, res) => {
  const result = await pool.query("SELECT NOW()");
  return res.json(result.rows[0]);
});

app.listen(4000);
console.log("Server on port", 4000);
