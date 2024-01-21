const { uploadFiles,uploadToCloudinaryMultiple} = require("../utils/upload");
const { Router } = require("express");
const { addImageData } = require("../controller");
const isAuth = require("../utils/isAuth");
const router = Router();
router.post("/addImage",isAuth,uploadFiles,
  uploadToCloudinaryMultiple,addImageData
);
module.exports = router;
 

 