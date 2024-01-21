const { Router } = require("express");
const { getAlbumData } = require("../controller");
const isAuth = require("../utils/isAuth");
const router = Router();
router.get("/fetchAlbum",isAuth,getAlbumData);


module.exports = router;   