import express from "express";
import cors from "cors";
import userRouter from "./router/userInfoRouter.js";
import dotenv from "dotenv";
dotenv.config();

const app = express();
app.use(
  cors({
    // origin: ["https://user-profile-manager-frontend.vercel.app"],
    // methods: ["GET", "POST"],
    // credentials: true,
  })
);
app.use(express.json());

app.use("/api/user", userRouter);

app.use("/api/user",(req,res) => {
  res.json("Route checking successfull")
});

app.use("/",(req,res) => {
        res.json("Home page")
});

app.use("*", (req, res) => {
  res.status(404).send("OPPS!! 404 page not found");
});

export default app;
