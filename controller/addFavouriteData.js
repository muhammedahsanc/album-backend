const { favouriteMdl } = require("../model");


const addFavouriteData = async(req,res,next) =>{
    const favPic= req.body.photoFile;   
    console.log(req.body.photoFile,"reeeeeeeeeqqqqq booodyyyyyyy");
    // console.log(favphoto,"favourite id");
    console.log(favPic,"favourite id");

    const UserDetails=req.user; 
    const username = UserDetails.username;
    console.log(username,"favourth");
    const data = await favouriteMdl.favouriteImageMdl(username,favPic)
    res.status(200).json({message:"favourite addedd successfully"})
  
}
module.exports = [addFavouriteData];
