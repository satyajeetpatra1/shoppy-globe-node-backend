import { getAllProducts, getProductById } from "../controllers/Product.controller.js";
import { authenticate } from "../middlwares/middlewares.js";

export default function ProductRoute(app) {
  app.get("/products", authenticate, getAllProducts);

  app.get("/products/:id", authenticate, getProductById);
}
