const { Router } = require("express");
const { unfavouritePhoto } = require("../controller");
const isAuth = require("../utils/isAuth");
const router = Router();
router.post("/removeFav",isAuth,unfavouritePhoto
);
module.exports = router;
 

 