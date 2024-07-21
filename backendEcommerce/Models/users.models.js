import mongoose from "mongoose";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

let { Schema, model } = mongoose;

let addressSchema = new Schema({
  HouseNumber: { type: String },
  city: { type: String },
  country: { type: String },
});

let userSchema = new Schema({
  userName: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: {
    type: String,
    required: true,
    min: [6, "Password is too short "],
  },
  phoneNumber: { type: Number },
  addresses: { type: [addressSchema], default: [] },
});

// Hash the password when someone uses the user schema

userSchema.pre("save", async function (next) {

  let user = this;

  if (!user.isModified("password")) {
    return next();
  }

  try {
    let salt = await bcrypt.genSalt(10);
    let hashedPassword = await bcrypt.hash(user.password, salt);

    user.password = hashedPassword;
    next();
  } catch (err) {
    console.log("Bcrypt error ", err);
  }
});

userSchema.methods.comparePassword = async function (candidatePassword) {
  return await bcrypt.compare(candidatePassword, this.password);
};

userSchema.methods.generateToken = function () {
  return jwt.sign({ id: this._id, email: this.email }, process.env.PRIVATE_KEY);
};

let User = model("User", userSchema);

export default User;
