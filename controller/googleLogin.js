const hashPassword = require("../utils/generateHashedPasswords");
const { GoogleMdl } = require("../model");
const jwt = require('jsonwebtoken');
let token;


const googleLogin = async (req, res, next) => {
    try {
        let {email} = req.body;
        console.log(email);

       const data = await GoogleMdl.checkUserName({username:email})
       if (data instanceof Error) throw new Error("Something went wrong");
       if (data) throw new Error("Username already exist");

        let password = new Date()
        const hashedPassword =await hashPassword(password)
        console.log(hashedPassword,"haaaaaaaaaaaaaaaaaaaaash");
        const Udata = await GoogleMdl.googleLoginMdl({ username: email, password: hashedPassword })
        console.log(Udata);
        token = jwt.sign({ username: Udata.username },'secret',{expiresIn:840000});
        auth=true;
        role='user';
        mail=Udata.username;
        return res 
        .status(200)
        .json({ message: "Successfully Completed", token, auth,mail,role});
    }catch(error){
        console.error(error)
        next(error)
    }
}
module.exports = [googleLogin];
