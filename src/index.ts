import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import blogRoutes from "./routes/blogRoutes";
import { connectToDB } from "./config"

dotenv.config();
connectToDB();

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/blogs", blogRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server started at ${PORT}`));