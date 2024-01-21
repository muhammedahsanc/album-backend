const { miniSchema } = require("../schemas");

const getPhotosMdl = async ({username, id}) => {
    console.log(username,id,"mooooooggggggalllll");
  try {
    const user = await miniSchema.findOne({ username });
    if (!user) {
      console.error('User not found.');
      return [];
    }
    const album = user.albums.find((album) => album._id.toString() === id);
    if (!album) {
      console.error('Album not found.');
      return [];
    }
    const photos = album.gallery;
    console.log(photos);
    return photos;
  } catch (error) {
    console.error('Error fetching photos:', error);
    throw error; // You might want to handle this error in the calling function
  }
};

module.exports = { getPhotosMdl };
