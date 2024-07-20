import express from "express";
import {
  createUser, updateUser , replaceUser, deleteUser, getOne , getAll , signup , login
} from "../Controllers/users.controllers.js";
let router = express.Router();

router
  .post("/", createUser)
  .patch("/" , updateUser)
  .put( "/" , replaceUser)
  .delete( "/" , deleteUser)
  .get("/getone" , getOne)
  .get("/" , getAll)
  .post("/signup" , signup)
  .post("/login" , login )

  export default router;
