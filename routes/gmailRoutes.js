const { Router } = require("express");
const { gmailVerify } = require("../controller");
const router = Router();
router.get("/gmailChangeStatus/:id", gmailVerify);


module.exports = router;   