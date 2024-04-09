const CourseModel = require("../models/courseModel");

const get = (options) => {
  const { skip, pageSize, sort, dir, search } = options;
  let filter = {};
  if (search) {
    filter = {
      $or: [
        { name: { $regex: search, $options: "i" } },
        { duration: { $regex: search, $options: "i" } },
      ],
    };
  }

  return CourseModel.find(filter, { __v: 0 })
    .sort({ [sort]: dir })
    .skip(skip)
    .limit(pageSize);
};

const getCount = (options) => {
  return CourseModel.countDocuments();
};

const updateCourse = (id, data) => {
  return CourseModel.findOneAndUpdate(
    { _id: id },
    {
      isActive: data.isActive,
      name: data.name,
      duration: data.duration,
      rating: data.rating,
      price: data.price,
    }
  );
};

const patch = (id, data) => {
  return CourseModel.findOneAndUpdate({ _id: id }, data);
};

const deleteCourse = (id) => {
  return CourseModel.deleteOne({ _id: id });
};

module.exports = {
  get,
  updateCourse,
  patch,
  deleteCourse,
  getCount,
};
