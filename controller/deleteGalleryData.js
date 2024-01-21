const { deleteImageMdl } = require("../model");


const deleteGalleryData= async(req,res,next) =>{
    // console.log(req.body,"ddddddddeeeeeeeeeee");
    photoId= req.body.photoId;
    console.log(photoId,"img dlt id");
    const albumId =req.body.albumId;
    console.log(albumId,"albuuuum id");
    const username =  req.user.username;
    console.log(username,"img dlt user id");
    const data = await deleteImageMdl.deleteMdl({albumId,photoId,username})
    return res.status(200).json({message:"Photo deleted successfully"})
}
module.exports = deleteGalleryData