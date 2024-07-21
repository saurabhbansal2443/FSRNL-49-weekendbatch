import User from "../Models/users.models.js";

let cookieOption = {
  httpOnly: true,
  secure: true,
  sameSite: "none",
};

let signup = async (req, res) => {
  let { email } = req.body;

  try {
    let existingUser = await User.findOne({ email: email });

    // if user is present
    if (existingUser) {
      return res
        .status(403)
        .send({ result: false, message: "User already Exist" });
    }

    let newUser = new User(req.body);

    let userData = await newUser.save();

    let token = await userData.generateToken();

    return res.status(200).cookie("Token", token, cookieOption).send({
      result: true,
      message: "User created succesfully ",
      data: userData,
    });
  } catch (err) {
    return res.status(500).send({ result: false, message: err.message });
  }
};

let login = async (req, res) => {
  let { email, password } = req.body;

  // existing user

  try {
    let existingUser = await User.findOne({ email: email });

    if (!existingUser) {
      // if user is not exists
      return res
        .status(404)
        .send({ result: false, message: "User not exist " });
    }

    // compare the password

    let passwordCheckResult = await existingUser.comparePassword(password);

    let token = await existingUser.generateToken();

    if (passwordCheckResult) {
      return res.status(201).cookie("Token", token, cookieOption).send({
        result: true,
        message: "Login succesfull ",
        data: existingUser,
      });
    } else {
      return res
        .status(401)
        .send({ result: false, message: "password is incorrect" });
    }
  } catch (err) {
    return res.status(500).send({ result: false, message: err.message });
  }
};

let getUser = (req, res) => {};

let updateUser = (req, res) => {};

let logout = (req, res) => {};

export { signup, login, getUser, updateUser, logout };
// signup
// login

// getUser
// updateUser
// Logout
