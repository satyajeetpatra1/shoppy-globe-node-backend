import jwt from "jsonwebtoken";

export const authenticate = (req, res, next) => {
  try {
    const token = req.headers.authorization?.split(" ")[1];

    if (!token) {
      return res.status(401).json({ message: "Not authorized" });
    }

    try {
      const decoded = jwt.verify(token, "SECRET_KEY");
      req.user = decoded.id;
      next();
    } catch (error) {
      res.status(401).json({ message: "Invalid token" });
    }
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
};