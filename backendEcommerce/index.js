import express from "express";
import "dotenv/config";
import dbConnect from "./database.js";
import userRouter from "./Routes/users.routes.js";

let server = express();

let port = process.env.PORT || 3000;

// Inbuilt middlewares -- server level middelwares

server.use(express.json()); // to read to the data of body ( body parser )
server.use(express.urlencoded({ extended: true })); // this will parse the url data in better form

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
