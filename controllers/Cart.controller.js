import CartModel from "../models/Cart.model.js";
import ProductModel from "../models/Product.model.js";

export async function getCartItems(req, res) {
  try {
    const cartItems = await Cart.find({ userId: req.user }).populate(
      "productId"
    );

    return res.json(cartItems);
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
}

export async function addToCart(req, res) {
  try {
    const product = await ProductModel.findById(req.body.productId);
    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }

    const cartItem = await CartModel.create({
      userId: req.user,
      productId: req.body.productId,
      quantity: req.body.quantity,
    });

    return res.json(cartItem);
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
}

export async function updateCartItem(req, res) {
  try {
    const updatedItem = await CartModel.findByIdAndUpdate(
      req.params.id,
      { quantity: req.body.quantity },
      { new: true }
    );

    return res.json(updatedItem);
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
}

export async function removeFromCart(req, res) {
  try {
    const deletedItem = await CartModel.findByIdAndDelete(req.params.id);
    if (!deletedItem) {
      return res.status(404).json({ message: "Cart item not found" });
    }

    return res.json({ message: "Item removed from cart" });
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
}
