const Course = require("../models/courseModel");
const courseRepo = require("../repositories/courseRepo");

// Total Records = 105
// PageSize = 10
// Pages = 11
// (page) 1 --> 1 - 10 - 0 (skipped Records) (formula) --> ((page - 1) * pageSize)
// 2 --> 11 - 20       - 10
// 3 --> 21 - 30       - 20

const getOptions = (req) => {
  var sort = req.query.sort || "updatedAt";
  var dir = req.query.dir || "desc";
  var search = req.query.search || "";
  const pageSize = +req.params.pageSize || 10;
  const page = +req.params.page || 1;
  let skip = (page - 1) * pageSize;
  return {
    skip,
    pageSize,
    sort,
    dir,
    search,
  };
};

const getAllCourses = async (req, res) => {
  try {
    const options = getOptions(req);
    const courses = await courseRepo.get(options);
    let totalRecords = await courseRepo.getCount(options);
    let totalPages = Math.ceil(totalRecords / options.pageSize);
    let response = {
      metadata: {
        totalPages,
        totalRecords,
      },
      data: courses,
    };
    res.status(200).json(response);
  } catch (e) {
    console.log(e);
    res.status(500).send("Internal Server Error");
  }
};

const createCourse = async (req, res) => {
  try {
    const body = req.body;
    body.createdAt = new Date();
    const course = new Course(body);
    await course.save();
    res.status(201).send("Added Successfully!");
  } catch (err) {
    console.log(err);
    res.status(500).send("Internal Server Error");
  }
};

const getCourse = async (req, res) => {
  try {
    const { id } = req.params;
    const course = await Course.findById(id);
    res.status(200).json(course);
  } catch (err) {
    console.log(err);
    res.status(500).send("Internal Server Error");
  }
};

// PUT - FULL UPDATE
// PATCH - PARTIAL UPDATE

const putCourse = async (req, res) => {
  try {
    const { id } = req.params;
    const data = req.body;
    const course = await courseRepo.updateCourse(id, data);
    res.status(204).send("Updated");
  } catch (err) {
    console.log(err);
    res.status(500).send("Internal Server Error");
  }
};

const patchCourse = async (req, res) => {
  try {
    const { id } = req.params;
    const data = req.body;
    await courseRepo.patch(id, data);
    res.status(204).send("Updated");
  } catch (err) {
    console.log(err);
    res.status(500).send("Internal Server Error");
  }
};

const remove = async (req, res) => {
  try {
    const { id } = req.params;
    await courseRepo.deleteCourse(id);
    res.status(204).send("DELETED");
  } catch (err) {
    console.log(err);
    res.status(500).send("Internal Server Error");
  }
};

module.exports = {
  getAllCourses,
  createCourse,
  getCourse,
  putCourse,
  patchCourse,
  remove,
};

// another way to update the course
// const updateCourse = async (req, res) => {
//   try {
//     const { id } = req.params;
//     const { body } = req;
//     const course = await Course.findById(id);
//     await course.updateOne(body);
//     res.status(200).send("Updated Successfully!");
//   } catch (err) {
//     console.log(err);
//     res.status(500).send("Internal Server Error");
//   }
// };

// another way to delete the course
// const deleteCourse = async (req, res) => {
//   try {
//     const { id } = req.params;
//     const course = await Course.findById(id);
//     await course.deleteOne();
//     res.status(200).send("Deleted Successfully!");
//   } catch (err) {
//     console.log(err);
//     res.status(500).send("Internal Server Error");
//   }
// };
