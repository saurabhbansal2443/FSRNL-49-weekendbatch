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

let login = (req, res) => {};

let getUser = (req, res) => {};

let updateUser = (req, res) => {};

let logout = (req, res) => {};

export { signup, login, getUser, updateUser, logout };
// signup
// login

// getUser
// updateUser
// Logout
