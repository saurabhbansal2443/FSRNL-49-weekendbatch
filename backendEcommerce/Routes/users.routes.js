import express from "express";
import auth from "../middelwares/auth.middelware.js";
import {
  signup,
  login,
  getUser,
  updateUser,
  logout,
} from "../Controllers/users.controllers.js";

let Router = express.Router();

Router.post("/signup", signup)
  .post("/login", login)
  .get("/user", auth, getUser)
  .patch("/update", auth, updateUser)
  .post("/logout", auth, logout);

export default Router;
