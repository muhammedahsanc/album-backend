const { galleryMdl } = require("../model");
const addGalleryUpload = async (req, res, next) => {
  const CloudnaryUrl = req.filenames;
  const ImageName = req.fileOriginalname;
  const fileName = ImageName.join(",");
  const CloudnaryUrlString = CloudnaryUrl.join(",");
  const UserDetails = req.user;
  const username = UserDetails.username;
  const { AlbumId } = req.body;
  await galleryMdl.galleryMdl(CloudnaryUrlString, fileName, username, AlbumId);
  res.status(200).json({ message: "Photos added Successfully" });
};
module.exports = [addGalleryUpload];
