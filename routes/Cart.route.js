import {
  addToCart,
  getCartItems,
  removeFromCart,
  updateCartItem,
} from "../controllers/Cart.controller.js";
import { authenticate } from "../middlwares/middlewares.js";

export default function CartRoute(app) {
  app.get("/cart", authenticate, getCartItems);

  app.post("/cart", authenticate, addToCart);

  app.put("/cart/:id", authenticate, updateCartItem);

  app.delete("/cart/:id", authenticate, removeFromCart);
}
