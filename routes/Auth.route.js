import { loginUser, registerUser } from "../controllers/Auth.controller.js";

export default function AuthRoute(app) {
  app.post("/register", registerUser);

  app.post("/login", loginUser);
}
