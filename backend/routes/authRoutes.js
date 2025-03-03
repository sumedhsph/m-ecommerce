import express from "express";
import AuthControllers from "../controllers/authControllers.js"; // Ensure `.js` is added

const router = express.Router();

router.post("/admin-login", AuthControllers.admin_login);

export default router;
