import User from "../models/user.model.js";
import bcrypt from "bcrypt";

let createUser = async (req, res) => {
  // userName, email , password
  let data = req.body; // Frontend data

  let newUser = new User(data);

  let userData = await newUser.save();

  res.send(userData);
};

let updateUser = async (req, res) => {
  // email , phoneNumber

  let { email } = req.body;

  let updateUser = await User.findOneAndUpdate({ email: email }, req.body, {
    new: true,
  });

  res.send(updateUser);
};

let replaceUser = async (req, res) => {
  // email

  let { email } = req.body;

  let replacedUser = await User.findOneAndReplace({ email: email }, req.body, {
    new: true,
  });

  res.send(replacedUser);
};

let deleteUser = async (req, res) => {
  let { email } = req.body;

  let deletedUser = await User.findOneAndDelete({ email: email });

  res.send(deletedUser);
};

let getOne = async (req, res) => {
  let { email } = req.body;

  let userData = await User.findOne({ email: email });

  res.send(userData);
};

let getAll = async (req, res) => {
  let allUsers = await User.find();

  res.send(allUsers);
};

let signup = async (req, res) => {
  // Username , email , password \

  let { email, userName, password } = req.body;

  let userData = await User.findOne({ email: email });

  if (userData) {
    // if user is present
    return res.send({ result: false, message: "User already present " });
  }

  // If user is not present

  // Encrypt the password // Bcrypt

  let salt = bcrypt.genSaltSync(10);
  let hashedPassword = bcrypt.hashSync(password, salt);

  let newUser = await User({
    email: email,
    userName: userName,
    password: hashedPassword,
  });

  let user = await newUser.save();

  res.send({ result: true, message: " signup succesfull ", data: user });
};


let login = async (req, res) => {
    // email , password 

    let { email , password } = req.body;

    // isuser present 

    let user = await User.findOne({ email: email});

    if(!user){ // if the user is not present in DB 
      return res.status(404).send({result : false , message : "User not found"})
    }

    // We have to check the password 

    let authRes = bcrypt.compareSync(password ,user.password );

    if(authRes == true ){
      res.send( { result : true , message : "Login Done " , data : user  })
    }else{
      res.send({ result : false , message : "password is incorrect"})
    }
}   



export {
  createUser,
  updateUser,
  replaceUser,
  deleteUser,
  getOne,
  getAll,
  signup,
  login
};

// Create User // done
// Update User // done
// Replace User // done
// Delete User // Done
// Get one  // Done
// GEt all // Done

// Signup
// login
