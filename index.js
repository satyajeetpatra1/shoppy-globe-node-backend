import express from "express";
import connectDB from "./config/connectDB.js";
import ProductRoute from "./routes/Product.route.js";

connectDB();

const app = express();

app.get("/", (req, res) => {
  res.send("Hello, World!");
});

ProductRoute(app);

const PORT = 8080;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
