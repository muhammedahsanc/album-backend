const { miniSchema } = require("../schemas");

const googleLoginMdl = async ({ username,password}) => {
    console.log("heeeeeeeeeeeeeeeeeeeeeyyyyy",username,password);
    try{
        const user = await miniSchema.create({username,password})
        return user ? user : false;



    }catch(error){
        console.error(error)
        return error
    }
}
const  checkUserName = async ({username})=>{
    console.log(username,"dbbbbbbbbbbbbtestttttttt");
    try{
        const user = await miniSchema.findOne({username})
        return user ? user.username : null;
    }catch(error){
        console.error(error);
        return error;
    }
}
module.exports = { checkUserName, googleLoginMdl };



