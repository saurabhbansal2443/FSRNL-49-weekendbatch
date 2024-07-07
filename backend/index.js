import express from "express";
import productRouter from "./Routes/products.routes.js";
import userRouter from "./Routes/users.routes.js"

let server = express();

let port = 8000;

server.use(express.json());

server.use("/products", productRouter);
server.use("/users", userRouter);
server.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
