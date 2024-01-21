const { miniSchema } = require("../schemas");


const removeFavMdl = async(unFavId,username) =>{
    try {
        const updatedUser = await miniSchema.findOneAndUpdate({username},   {
            $pull: {
              "favouritePhotos": { _id: unFavId },
            },
          },)
    } catch (error) {
        return error;
    }
  
    
}
module.exports ={removeFavMdl}