const express = require("express");
// const userData = require("./data.json");
const defaultRoute = require("./routes/defaultRoute");
const bookRoute = require("./routes/bookRoute");
const courseRoute = require("./routes/courseRoute");
const mongoose = require("mongoose");
const dotenv = require("dotenv");

const app = express();
dotenv.config();

app.listen(5000, () => console.log("Server Up & Running!"));

mongoose
  .connect(process.env.DB_URL)
  // .connect("mongodb://127.0.0.1:27017/fsa")
  .then((res) => console.log("DB Connected"))
  .catch((err) => console.log(err));

app.use(express.json());

app.use("/", defaultRoute);
app.use("/books", bookRoute);
app.use("/courses", courseRoute);

// app.use("/users", (req, res) => {
//   res.status(200).json(userData);
// });

// app.post("/books/:id", (req, res) => {
//   let body = req.body;
//   res
//     .status(200)
//     .json(
//       data.find((val) => val.id === req.params.id && val.name === body.name)
//     );
// });

// app.use("/", (req, res) => {
//   res.status(200);
//   res.send("Welcome to My API");
// });

// CRUD -> Create, Read, Update & Delete
// Request Methods
// GET - Read Data
// POST - Create Data --> Request to Read Data
// PUT & PATCH - Update Data
// DELETE - Deletes the Data

/// LOGGING (time log -> shows time for details when and what had been done or changed with backend server)
