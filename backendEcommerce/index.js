import express from "express";
import "dotenv/config";
import dbConnect from "./database.js";
import userRouter from "./Routes/users.routes.js";
import cookieParser from "cookie-parser";
import cors from "cors";

let server = express();

let port = process.env.PORT || 3000;

// Inbuilt middlewares -- server level middelwares

server.use(express.json()); // to read to the data of body ( body parser )
server.use(express.urlencoded({ extended: true })); // this will parse the url data in better form
server.use(cookieParser()); // to read the cookies data / parse
server.use(
  cors({
    origin: "https://geekscart.netlify.app",
    credentials: true,
  })
);

// User Api
server.use("/users", userRouter);

dbConnect()
  .then(() => {
    console.log(" Database is connected ");

    server.listen(port, () => {
      console.log(`Server is running on http://localhost:${port}/`);
    });
  })
  .catch((err) => {
    console.log("DataBase error ", err);
  });
