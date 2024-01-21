const jwt = require('jsonwebtoken');
const {SignUpMdl} = require("../model")
module.exports= (req,res,next) =>{
    try{
        const token = req.header("Authorization")
      if (!token) throw new Error("UNAUTHERISED_ACCESS NO TOKEN");
      jwt.verify(token,'secret',async(error,decoded)=>{
        if (error) {
            throw new Error("UNAUTHERISED_ACCESS");
        }else{
            const username = decoded.username;
            const UserDelails = await SignUpMdl.getUserData({username})
            if (UserDelails) {
                req.user = UserDelails
                next()
            }else{
            throw new Error("UNAUTHERISED_ACCESS");
            }
           
        }
      })

    }catch(error){
        next(error);

    }
}