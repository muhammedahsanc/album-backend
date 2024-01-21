const { Router } = require("express");
const { addSignUp } = require("../controller");
const router = Router();
router.post("/add", addSignUp);


module.exports = router;