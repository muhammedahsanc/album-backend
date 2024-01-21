const { Router } = require("express");
const {  deleteAlbumData } = require("../controller");
const isAuth = require("../utils/isAuth");
const router = Router();
router.post("/removeAlbum",isAuth,deleteAlbumData);

module.exports = router;   