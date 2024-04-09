const data = [
  {
    id: 1,
    name: "HTML & CSS Projects",
    price: 500,
    inStock: true,
  },
  {
    id: 2,
    name: "JavaScript",
    price: 800,
    inStock: false,
  },
];

const get = (req, res) => {
  res.status(200);
  res.json(data);
};

const getById = (req, res) => {
  try {
    const { id } = req.params;
    const book = data.find((val) => val.id === parseInt(id));
    if (book) res.status(200).json(book);
    else throw "Book Not Found";
  } catch (e) {
    res.status(404).send(e);
  }
};

const addBook = (req, res) => {
  const { body } = req;
  const lastId = data[data.length - 1].id;
  data.push({ ...body, id: lastId + 1 });
  res.status(201).send("Book Added Successfully!");
};

const deleteBook = (req, res) => {
  const { id } = req.params;
  const BookId = data.findIndex((val) => val.id === parseInt(id));
  data.splice(BookId, 1);
  res.status(200).send("Book Deleted Successfully");
};

const updateBook = (req, res) => {
  const { id } = req.params;
  const { body } = req;
  data.forEach((val, inx) => {
    if (val.id === parseInt(id)) {
      for (let key in body) {
        data[inx][key] = body[key];
      }
    }
  });
  res.status(200).json(data);
};

// **Another way of updating Book**
// const updateBook = (req, res) => {
//   const {id} = req.params;
//   const {body} = req;
//   const book = data.find((val) => val.id === parseInt(id));
//   data[id - 1] = {...book, ...body};
// }

module.exports = {
  get,
  getById,
  addBook,
  deleteBook,
  updateBook,
};

/// MongoDB
// DB Server --> is normal server but designed to store the data
// databases
// collections

// FSA -- database
// Courses -- collection
// _id
// Batches -- collection
// Alumni -- collection
// Trainers -- collection
/// Course: "63aamjskfkahkja'kjakjkm"
