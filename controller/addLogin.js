const { LoginMdl } = require("../model");
const argon2 = require("argon2");
const jwt = require("jsonwebtoken");
let token;
const addLogin = async (req, res, next) => {
  try {
    let { username, password } = req.body;
    console.log(username, password, "loooooooooogin daaaaaaata");

    const newPassword = password;
    const data = await LoginMdl.addLoginMdl({ username });
    console.log(data.status, "login ew");
    if (data instanceof Error) throw new Error("Something went wrong");
    if (data.status == true) {
      const hashedPassword = data.password;
      const passwordMatches = await argon2.verify(hashedPassword, newPassword);
      if (passwordMatches) {
        console.log("Password is correct!");

        token = jwt.sign({ username:data.username }, "secret", { expiresIn: "3d" });

        auth = true;
        role = data.role;
      } else {
        // console.log('Password is incorrect.');
        throw new Error("password is incorrect");
      }
    } else {
      throw new Error("Please verify your email");
    }
    return res.status(200).json({
      message: "Successfully Completed",
      token,
      auth,
      data: data.username,
      role,
    });
  } catch (error) {
    console.error(error);
    next(error);
  }
};
module.exports = [addLogin];
