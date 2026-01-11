import express from "express";
import connectDB from "./config/connectDB.js";
import ProductRoute from "./routes/Product.route.js";
import CartRoute from "./routes/Cart.route.js";
import AuthRoute from "./routes/Auth.route.js";

connectDB();

const app = express();

app.get("/", (req, res) => {
  res.send("Hello, World!");
});

ProductRoute(app);

CartRoute(app);

AuthRoute(app);

const PORT = 8080;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
