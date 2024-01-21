
const { miniSchema } = require("../schemas");

const getAlbumData = async({username}) =>{
    try {
        const user = await miniSchema.findOne({username})
    if (!user) {
        console.log('Document not found');
        return null; 
      }
      const albums = user.albums;
      return albums;    
    } catch (error) {
        console.error('Error fetching albums:', error.message);
        throw error;
    }
   
}
module.exports = {getAlbumData}