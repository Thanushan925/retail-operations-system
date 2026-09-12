import express from "express";
import cors from "cors";

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