const { miniSchema } = require("../schemas");

const albumMdl =async (cloudUrl,ImgName,albumText,username) => {
    console.log(cloudUrl,ImgName,albumText,username,"model datas");
    const newData = {
        AlbumName: albumText,
        file: [
          {
            file: cloudUrl,
            fileName:ImgName,
          },
    
        ],
      };
    const user = await miniSchema.findOne({username});
      if(!user){
        console.log("User not found");
      }else{
        user.albums.push(newData);
        await user.validate();
        return user.save();
      }
    
}
module.exports = {albumMdl  };
