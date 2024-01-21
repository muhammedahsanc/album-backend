const { Router } = require("express");
const { deleteGalleryData } = require("../controller");
const isAuth = require("../utils/isAuth");
const router = Router();
router.post("/deleteImage",isAuth,deleteGalleryData);


module.exports = router;   