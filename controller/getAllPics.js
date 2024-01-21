const { getAllPicsMdl } = require("../model")


const getAllPics = async(req,res,next) =>{
    const username = req.user.username
    const data = await getAllPicsMdl.getAllPicsMdl(username)
    res.status(200).json({message:"all photos",data:data})
}
module.exports=[getAllPics]