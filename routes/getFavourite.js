const { Router } = require("express");
const { getFavouriteData } = require("../controller");
const isAuth = require("../utils/isAuth");
const router = Router();
router.get("/fetchFavourite",isAuth,getFavouriteData);


module.exports = router;   