import express from "express";
import AuthControllers from "../controllers/authControllers.js"; // Ensure `.js` is added
import authControllers from "../controllers/authControllers.js";
import authMiddleware from "../middlewares/authMiddleware.js";

const router = express.Router();

router.post("/admin-login", AuthControllers.admin_login);
router.get("/get-user", authMiddleware, authControllers.getUser)

export default router;
