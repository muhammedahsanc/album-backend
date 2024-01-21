const { Router } = require("express");
const { getGalleryData } = require("../controller");
const isAuth = require("../utils/isAuth");
const router = Router();
router.get("/fetchPhotos/:id",isAuth,getGalleryData);


module.exports = router;   