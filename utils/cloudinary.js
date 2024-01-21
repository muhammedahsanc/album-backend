const { cloudinary } = require('./upload');

const uploadToCloudinary = async (file) => {
  try {
    const result = await cloudinary.uploader.upload(file.path, {
      folder: 'photoAlbum',
    });
    return result;
  } catch (error) {
    throw error;
  }
};
module.exports = { uploadToCloudinary };
