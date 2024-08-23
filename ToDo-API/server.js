const express = require("express");
const app = express();
const dotenv = require("dotenv");
const routes = require("./routes/main-route");
const SequelizeConnect = require("./database/connection");
const bodyParser = require("body-parser");
const morgan = require("morgan");
const cors = require("./middlewares/cors");
dotenv.config();

//middlewares
app.use(cors);
app.use(bodyParser.json());
app.use(morgan("dev"));
app.use("/api/v1", routes);

SequelizeConnect.sync({
  // force: true,
})
  .then(() => {
    app.listen(port, () => {
      console.log(`Listening to port ${port}`);
    });
  })
  .catch((err) => {
    console.error(err);
  });

const port = process.env.port || "3000";
