const http = require("http");
const userData = require("./data.json");

const data = ["Book1", "Book2", "Book3"];

const PORT = process.env.PORT || 5000;

function ctrl(req, res) {
  switch (req.url) {
    case "/":
      res.writeHead(200);
      res.write("Welcome to My API!");
      break;
    case "/books":
      res.writeHead(200);
      res.write(JSON.stringify(data));
      break;
    default:
      res.writeHead(404);
      break;
  }
  res.end();
}

http.createServer(ctrl).listen(PORT);

// if (req.url === "/books") {
//   res.write(JSON.stringify(data));
//   res.end();
// } else if (req.url === "/") {
//   res.write("Welcome to My API");
//   res.end();
// } else if (req.url === "/users") {
//   res.write(JSON.stringify(userData));
//   res.end();
// } else if (req.url === "/4/2") {
//   res.write(JSON.stringify(4 + 2));
//   res.end();
// } else {
//   res.writeHead(404);
//   res.write("NOT FOUND");
//   res.end();
// }
