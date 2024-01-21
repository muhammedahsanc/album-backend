const { LoginMdl } = require("../model");
const argon2 = require('argon2');
const jwt = require('jsonwebtoken');
let token;
const addLogin = async (req, res, next) => {
  try {
    let { username, password } = req.body;
    console.log(username,password,"loooooooooogin daaaaaaata");

    const newPassword=password;
    const data = await LoginMdl.addLoginMdl({username});
    console.log(data.status,'login ew');
    if (data instanceof Error) throw new Error("Something went wrong");
    if(data.status==true){
    const hashedPassword=data.password;
    const passwordMatches = await argon2.verify(hashedPassword, newPassword);
    if (passwordMatches) {
      console.log('Password is correct!');
      let currentDate = new Date();
      let expiresDate = new Date(currentDate.getTime() + 7 * 24 * 60 * 60 * 1000);
      
      // Convert expiresDate to seconds and set expiresIn directly
      let expiresIn = Math.floor((expiresDate.getTime() - currentDate.getTime()) / 1000);
      
      token = jwt.sign({ username: data.username }, 'secret', { expiresIn: expiresIn });
      
       auth=true;
       role=data.role;
    } else {
      // console.log('Password is incorrect.');
       throw new Error("password is incorrect");
    }
  }else{
    throw new Error("Please verify your email");

    }
    return res 
      .status(200)
      .json({ message: "Successfully Completed", token, auth,data:data.username,role});
  } catch (error) {
    console.error(error);
    next(error);
  }
};
module.exports = [addLogin];