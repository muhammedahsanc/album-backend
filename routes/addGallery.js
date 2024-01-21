const { uploadFiles,uploadToCloudinaryMultiple} = require("../utils/upload");
const { Router } = require("express");
const { addGalleryData } = require("../controller");
const isAuth = require("../utils/isAuth");
const router = Router();
router.post("/addGallery",isAuth,uploadFiles,
  uploadToCloudinaryMultiple,addGalleryData
);
module.exports = router;
 

 