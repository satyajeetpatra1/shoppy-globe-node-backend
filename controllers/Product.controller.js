import ProductModel from "../models/Product.model.js";

export async function getAllProducts(req, res) {
  try {
    const products = await ProductModel.find();
    return res.status(200).json(products);
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
}

export async function getProductById(req, res) {
  try {
    const product = await ProductModel.findById(req.params.id);

    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }

    return res.json(product);
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
}
