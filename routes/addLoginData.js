const { Router } = require("express");
const { addLogin } = require("../controller");
const router = Router();
router.post("/addLogin", addLogin);


module.exports = router;    