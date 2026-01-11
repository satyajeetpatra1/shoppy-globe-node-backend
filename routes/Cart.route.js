import {
  addToCart,
  getCartItems,
  removeFromCart,
  updateCartItem,
} from "../controllers/Cart.controller.js";

export default function CartRoute(app) {
  app.get("/cart", getCartItems);

  app.post("/cart", addToCart);

  app.put("/cart/:id", updateCartItem);

  app.delete("/cart/:id", removeFromCart);
}
