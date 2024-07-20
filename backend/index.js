import express from "express";
import productRouter from "./Routes/products.routes.js";
import userRouter from "./Routes/users.routes.js";
import mongoose from "mongoose";
import "dotenv/config";

let server = express();

let port = process.env.PORT || 3000;

server.use(express.json());

server.use("/products", productRouter);
server.use("/users", userRouter);

async function dbConnect() {
  return await mongoose.connect(process.env.MONGO_DB_URI);
}

dbConnect()
  .then(() => {
    console.log(" Db is connect ");
    server.listen(port, () => {
      console.log(`Server is running on http://localhost:${port}`);
    });
  })
  .catch((err) => {
    console.log(err);
  });
