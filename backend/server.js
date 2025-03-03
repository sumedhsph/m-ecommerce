import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import authRoutes from "./routes/authRoutes.js"; // Ensure .js extension is added
import dbconnect from "./utils/db.js";

const app = express();

// Load environment variables
dotenv.config();

// Middleware
app.use(
  cors({
    origin: ["http://localhost:5173"],
    credentials: true,
  })
);
app.use(bodyParser.json());
app.use(cookieParser());

// Routes
app.use("/api", authRoutes);

app.get("/", (req, res) => res.send("My backend"));

/* app.post("/admin-login", (req, res) => {
    res.send("Login successful");
}); */

// Start server
const port = process.env.PORT || "http://localhost:5000";
dbconnect();
app.listen(port, () => console.log(`Server running on port ${port}`));
