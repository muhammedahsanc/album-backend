const { Router } = require("express");
const { getAllPics } = require("../controller");
const isAuth = require("../utils/isAuth");
const router = Router();
router.get("/fetchAllPhotos",isAuth,getAllPics);


module.exports = router;   