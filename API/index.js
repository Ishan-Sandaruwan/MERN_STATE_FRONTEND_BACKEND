import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRouter from "./routes/user.route.js";
import authRouter from "./routes/auth.route.js";

dotenv.config(); // Load environment variables from .env file
const port = 3000;

mongoose
  .connect(process.env.MONGO, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("connected to the mongo db");
  })
  .catch((err) => {
    console.log(err);
  });

const app = express();

app.use(express.json());

app.listen(port, () => {
  console.log(`server is running on port ${port} `);
});

app.get("/", (req, res) => {
  res.send("hello world");
});

app.use("/api/user", userRouter);

app.use("/api/auth", authRouter);

app.use((err,req,res,next)=>{
  const statusCode = err.statusCode || 500 ;
  const message = err.message || 'Internal Server Error ';
  return res.status(statusCode).json({
    success : false ,
    statusCode ,
    message,
  });
});