import express from 'express';
import { signup , login , getUser , updateUser , logout } from '../Controllers/users.controllers.js';

let Router = express.Router();


Router
 .post("/signup" , signup)
 .post("/login" , login)
 .get("/user" , getUser)
 .patch("/update" , updateUser)
 .post("/logout" , logout)

 export default Router;


