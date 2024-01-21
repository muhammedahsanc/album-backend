const { miniSchema } = require("../schemas");

const galleryMdl = async (CloudnaryUrl, fileName, username, AlbumId) => {
  try {
    const updatedUser = await miniSchema.updateOne(
      { username, "albums._id": AlbumId },
      {
        $push: {
          "albums.$.gallery": {
            file: CloudnaryUrl,
            fileName: fileName,
            date: new Date(),
            status: true,
          },
        },
      }
    );
    // test adikk da
    
    if (!updatedUser) {
      console.error("User or Album not found.");
      return;
    }
    return true;
  } catch (err) {
    console.error(err);
  }
};

module.exports = { galleryMdl };

// const { miniSchema } = require("../schemas");

// const galleryMdl = async (CloudnaryUrl, fileName, username, AlbumId) => {
//   const galleryData = {
//     file: CloudnaryUrl,
//     fileName: fileName,
//   };

//   console.log(CloudnaryUrl, fileName, username, AlbumId, "Gallery Details");

//   try {
//     const user = await miniSchema.findOne({ username });

//     if (!user) {
//       console.error("User not found.");
//       return;
//     }

//     const albumIndex = user.albums.findIndex(
//       (album) => album._id.toString() === AlbumId
//     );

//     if (albumIndex === -1) {
//       console.error("Album not found.");
//       return;
//     }

//     user.albums[albumIndex].gallery.push({
//       file: galleryData.file,
//       fileName: galleryData.fileName,
//       date: new Date(),
//       status: true,
//     });
//     await user.save();
//     console.log("Gallery data added to the specific album successfully.");
//   } catch (err) {
//     console.error(err);
//   }
// };

// module.exports = { galleryMdl };
