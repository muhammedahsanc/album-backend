const cloudinary = require('../utils/cloudinary');
const {AlbumModel} =require('../model')

const addImageData = async (req, res, next) => {
    // try { 
        const CloudnaryUrl = req.filenames;
        const ImageName = req.fileOriginalname
        const fileName = ImageName.join(',');
        console.log(fileName);
        console.log(ImageName); 
        console.log(CloudnaryUrl);
        const CloudnaryUrlString = CloudnaryUrl.join(',');
        console.log(CloudnaryUrlString);
        const {albumText}= req.body
        const UserDetails=req.user; 
        console.log(UserDetails,"dddddddddddddaaaaaaaaaaaa");
        const username = UserDetails.username
        const data = await AlbumModel.albumMdl(CloudnaryUrlString,fileName,albumText,username);
        res.status(200).json({message:'Successfully Completed'})
        console.log(albumText);
};

module.exports = [addImageData];
