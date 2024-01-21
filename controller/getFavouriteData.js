const { getFavouriteMdl } = require("../model");


const getFavouriteData  = async(req,res,next) =>{
  const username = req.user.username;

    const data = await getFavouriteMdl.getFavouriteMdl({username})
    console.log(data);
    return res.status(200).json({ data });

}
module.exports = getFavouriteData;
