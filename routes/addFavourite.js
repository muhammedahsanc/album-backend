const { Router } = require("express");
const { addFavouriteData } = require("../controller");
const isAuth = require("../utils/isAuth");
const router = Router();
router.post("/FavouritePhoto",isAuth,addFavouriteData
);
module.exports = router;
 

 