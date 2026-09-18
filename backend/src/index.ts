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

app.get("/api/products", async (req, res) => {
  try {
    const result = await pool.query(`
      SELECT
        id,
        name,
        sku,
        category,
        price
      FROM products
      ORDER BY id;
    `);

    res.json(result.rows);
  } catch (error) {
    console.error(error);

    res.status(500).json({
      status: "error",
      message: "Failed to fetch products.",
    });
  }
});

app.get("/api/inventory", async (req, res) => {
  try {
    const result = await pool.query(`
      SELECT
        stores.name AS store,
        products.name AS product,
        products.sku,
        products.category,
        inventory.quantity,
        products.price
      FROM inventory
      JOIN stores ON inventory.store_id = stores.id
      JOIN products ON inventory.product_id = products.id
      ORDER BY stores.name, products.name;
    `);

    res.json(result.rows);
  } catch (error) {
    console.error(error);

    res.status(500).json({
      status: "error",
      message: "Failed to fetch inventory.",
    });
  }
});