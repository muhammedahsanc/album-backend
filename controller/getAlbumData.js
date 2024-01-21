const {getAlbumMdl} = require("../model")

const getAlbumData = async (req, res) => {
  try {
    const username = req.user.username
    console.log(username);
    const data = await getAlbumMdl.getAlbumData({username});
    return res.status(200).json({ data });
  } catch (error) {
    console.error(error);
  }
};

module.exports = getAlbumData;
