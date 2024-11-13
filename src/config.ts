import mongoose from "mongoose";
import dotenv from "dotenv"

dotenv.config();

export const connectToDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI || "")
    console.log("Mongodb connected");
  } catch (error) {
    console.log("Database connection error: ", error);
  }
}