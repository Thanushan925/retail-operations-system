import express from "express";
import cors from "cors";
import pool from "./db";

const app = express();
const PORT = 3000;

app.use(cors());

app.get("/api/health", (req, res) => {
  res.json({
    status: "ok",
    message: "Retail Operations System backend is running.",
  });
});

app.listen(PORT, () => {
  console.log(`Backend running at http://localhost:${PORT}`);
});

app.get("/api/db-test", async (req, res) => {
  try {
    const result = await pool.query("SELECT NOW()");

    res.json({
      status: "ok",
      databaseTime: result.rows[0].now,
    });
  } catch (error) {
    console.error(error);

    res.status(500).json({
      status: "error",
      message: "Database connection failed.",
    });
  }
});