const express = require("express");
const router = express.Router();
const bookCtrl = require("../controller/bookCtrl");

router.get("/", bookCtrl.get);
router.get("/:id", bookCtrl.getById);
router.post("/create", bookCtrl.addBook);
router.delete("/:id", bookCtrl.deleteBook);
router.put("/:id", bookCtrl.updateBook);

module.exports = router;
