import { getAllProducts, getProductById } from "../controllers/Product.controller.js";

export default function ProductRoute(app) {
  app.get("/products", getAllProducts);

  app.get("/products/:id", getProductById);
}
