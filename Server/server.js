import express from "express";
import cors from "cors";
import dotenv from "dotenv";
dotenv.config();
import connectDB from "./db/connect.js";
import authRoutes from "./routes/auth/auth.js";
import homeRoutes from "./routes/home/homepage.js";
import profileRoutes from "./routes/profile/profile.js";

const app = express();

app.use(express.json());
app.use(cors());

app.use("/auth", authRoutes);
app.use("/home", homeRoutes);
app.use("/profile", profileRoutes);

const port = 3000;
(async () => {
  await connectDB(process.env.MONGO_URI);
  app.listen(port, () => console.log(`Server listening on port ${port}!`));
})();
