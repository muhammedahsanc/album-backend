const { miniSchema } = require("../schemas")

const favouriteImageMdl = async(username,favPic) =>{
   try {
         await miniSchema.updateOne({username},{$addToSet:{favouritePhotos:{_id:favPic}}})
    
   } catch (error) {
    console.log(error);
    return error;
   }
}
module.exports ={favouriteImageMdl}