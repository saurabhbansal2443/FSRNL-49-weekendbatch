import express from "express";
import {
  createProduct,
  getAllData,
  getSingleProduct,
  replaceProduct,
  updateProduct,
  deleteProduct,
} from "../Controllers/users.controllers.js";
let router = express.Router();

router
  .post("/", createProduct)
  .get("/", getAllData)
  .get("/:id", getSingleProduct)
  .put("/:id", replaceProduct)
  .patch("/:id", updateProduct)
  .delete("/:id", deleteProduct);

  export default router;
