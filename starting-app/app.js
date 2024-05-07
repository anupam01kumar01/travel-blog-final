import express from "express";
// app variable stores all functionalities of express here.
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRouter from "./routing/user-routes";
import postRouter from "./routing/post-routes";
import cors  from 'cors';

const app = express();
dotenv.config();

//middleware
app.use(cors());
app.use(express.json());
app.use("/user",userRouter);
app.use("/posts",postRouter);

mongoose.connect(
  "mongodb+srv://admin:anupkumar@cluster0.ho43a4k.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
).then(()=>
app.listen(5000,()=>
  console.log(" Connection Successful listening to the host"))
)
.catch((err)=> console.log(err));
