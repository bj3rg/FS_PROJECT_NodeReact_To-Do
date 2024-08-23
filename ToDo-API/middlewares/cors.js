const cors = require("cors");
var corsOptions = {
  origin: "http://localhost:5173",
  optionsSuccessStatus: 200,
};
module.exports = cors(corsOptions);
