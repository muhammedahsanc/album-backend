const { miniSchema } = require("../schemas");


const getFavouriteMdl= async({username})=>{
 console.log(username,"model");
 try{
 const user = await miniSchema.findOne({username})
 if (!user) {
    console.log('Document not found');
    return null; 
  }
  console.log(user);
  const favourite = user.favouritePhotos;
  console.log(favourite);
  return favourite;
} catch (error) {
    console.error('Error fetching albums:', error.message);
    throw error;
}
}
module.exports = {getFavouriteMdl}