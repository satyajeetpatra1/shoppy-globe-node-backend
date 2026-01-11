import express from "express";
import connectDB from "./config/connectDB.js";

connectDB();

const app = express();

app.get("/", (req, res) => {
  res.send("Hello, World!");
});

const PORT = 8080;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
