const { Router } = require("express");
const { googleLogin } = require("../controller");
const router = Router();
router.post("/googleLogin", googleLogin);


module.exports = router;


