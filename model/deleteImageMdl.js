
const { miniSchema } = require("../schemas");

const deleteMdl = async ({ albumId, photoId, username }) => {
  try {
    const updatedUser = await miniSchema.findOneAndUpdate(
      { username, "albums._id": albumId },
      {
        $pull: {
          "albums.$.gallery": { _id: photoId }, // Assuming the photoId is the unique identifier of the photo
        },
      },
      { new: true }
    );

    if (!updatedUser) {
      console.error("User or Album not found.");
      return;
    }

    console.log("Photo deleted from the specific album successfully.");
  } catch (error) {
    console.error(error);
    return error;
  }
};

module.exports = { deleteMdl };








// const { miniSchema } = require("../schemas");

// const deleteMdl = async({albumId,photoId,username})=>{
//             console.log(albumId,photoId,username,"model delete adata");
//     try {
//     const user = await miniSchema.findOne({ username });
//     const album = user.albums.find((album) => album._id.toString() === albumId);
// const deleteImage = album.gallery.pop(photoId)
//     } catch (error) {
//         console.log(error);
//         return error;
//     }
// }
// module.exports = {deleteMdl}