

const {getGalleryMdl} = require('../model');

const getGalleryData = async (req, res, next) => {
  const username = req.user.username;
  console.log(username);
  const { id } = req.params;
  console.log(id);
  try {
    const data = await getGalleryMdl.getPhotosMdl({ username, id });
    return res.status(200).json({ data });
  } catch (error) {
    console.error('Error fetching gallery data:', error);
    return res.status(500).json({ error: 'Internal Server Error' });
  }
};

module.exports = getGalleryData;
