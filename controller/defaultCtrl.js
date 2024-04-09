const getReq = (req, res) => {
  res.status(200).send("Welcome to My API using Express JS!");
};

const getHealth = (req, res) => {
  res.status(200).send("Server is Healthy");
};

module.exports = {
  getReq,
  getHealth,
};
