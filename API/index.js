import express from "express";
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import userRouter from './routes/user.route.js';
dotenv.config(); // Load environment variables from .env file
const port = 3000;

mongoose.connect(process.env.MONGO).then(()=>{
  console.log("connected to the mongo db");
}).catch((err)=>{
  console.log(err);
});

const app = express();

app.listen(port, () => {
  console.log(`server is running on port ${port} `);
});

app.get("/",(req,res)=>{
  res.send("hello world");
});

app.use('/api/user',userRouter);