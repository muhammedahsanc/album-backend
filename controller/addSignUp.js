const hashPassword = require("../utils/generateHashedPasswords");
const VerifyMail = require("../utils/emailVerification");

const { SignUpMdl,LoginMdl } = require("../model");
const { validationResult } = require("express-validator");

const addSignUpData = async (req, res, next) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty())
      return res.status(400).json({ errors: errors.array() });

    let { username, password } = req.body;
    const Userdata = await SignUpMdl.getUserName({ username });
    if (Userdata instanceof Error) throw new Error("Something went wrong");
    if (Userdata) throw new Error("Username already exist");

    password = await hashPassword(password);
    const data = await SignUpMdl.addSignUpMdl({ username, password });
    VerifyMail(username)
    if (data instanceof Error) throw new Error("Something went wrong");
    
    return res
      .status(200)
      .json({ message: "Successfully Completed", data: []});
  } catch (error) {
    console.error(error);
    next(error);
  }
};

const { check } = require("express-validator");
const validatePasswordMatch = check("conformPassword").custom(
  (value, { req }) => {
    if (value !== req.body.password) {
      throw new Error("Passwords do not match");
    }
    return true;
  }
);

module.exports = [validatePasswordMatch, addSignUpData];
