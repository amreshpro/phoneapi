import express from "express";
import dotenv from "dotenv";
import Database from "./config/db";
import authRoutes from "./routes/authRoutes";
import userRoutes from "./routes/userRoutes";
import contactRoutes from "./routes/contactRoutes";
import envConfig from "./config/envConfig";

dotenv.config();

const app = express();
app.use(express.json());

Database.connect();

app.use("/api/auth", authRoutes);
app.use("/api/users", userRoutes);
app.use("/api/contacts", contactRoutes);

const PORT = envConfig.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
