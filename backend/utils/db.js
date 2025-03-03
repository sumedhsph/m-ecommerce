import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();
const dbconnect = async () => {
    try {
      console.log("db connect runing")
    await mongoose.connect(process.env.DB_URL);
    mongoose.connection.on("connected", () => {
        console.log("Database connected successfully !!!");
        console.log("🟢 Mongoose is connected");
    });

    mongoose.connection.on("error", (err) => {
        console.error("🔴 Mongoose connection error:", err);
    });

    mongoose.connection.on("disconnected", () => {
        console.warn("🟠 Mongoose is disconnected");
    });
  } catch (error) {
    console.error("Database connection failed:", error);
    process.exit(1); // Exit process with failure
  }
};

export default dbconnect;
