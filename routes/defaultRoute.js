const express = require("express");
const router = express.Router();
const defaultCtrl = require("../controller/defaultCtrl");

router.get("/", defaultCtrl.getReq);
router.get("/health", defaultCtrl.getHealth);

module.exports = router;
