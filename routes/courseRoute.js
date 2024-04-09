const courseCtrl = require("../controller/courseCtrl");
const express = require("express");
const router = express.Router();

router.get("/", courseCtrl.getAllCourses);
router.get("/page/:page/size/:pageSize", courseCtrl.getAllCourses);
router.get("/:id", courseCtrl.getCourse);
router.post("/create", courseCtrl.createCourse);
router.put("/update/:id", courseCtrl.putCourse);
router.patch("/update/:id", courseCtrl.patchCourse);
router.delete("/remove/:id", courseCtrl.remove);

module.exports = router;
