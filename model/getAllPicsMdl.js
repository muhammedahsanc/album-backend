const { miniSchema } = require("../schemas");

const getAllPicsMdl = async (username) => {
  console.log(username, "getAllllllll");
  try {
    const result = await miniSchema.findOne(
      { username },
      { 'albums.gallery': 1, _id: 0 }
    ).lean().exec();

    if (result && result.albums) {
      const galleryFiles = result.albums.reduce(
        (acc, album) => [
          ...acc,
          ...(album.gallery || []).map(item => ({
            file: item.file,
            fileName: item.fileName, // Add this line to include fileName
          })),
        ],
        []
      );
      console.log(galleryFiles);
      return galleryFiles;
    } else {
      console.log(`No album gallery data found for username: ${username}`);
    }
  } catch (error) {
    console.error(`Error fetching album gallery data: ${error}`);
  }
};

module.exports = { getAllPicsMdl };
