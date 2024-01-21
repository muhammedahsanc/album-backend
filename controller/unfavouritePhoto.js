const { removeFavMdl } = require("../model");


const unfavouritePhoto =async(req,res,next)=>{
    const unfavPic= req.body.photoFile;
    console.log(unfavPic,'unfav idd');
    const UserDetails=req.user; 
    const username = UserDetails.username;
    await removeFavMdl.removeFavMdl(unfavPic,username)
    res.status(200).json({message:"favourite removed successfully"})
}
module.exports = [unfavouritePhoto]