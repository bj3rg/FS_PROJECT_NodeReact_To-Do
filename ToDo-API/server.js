const express = require("express");
const app = express();
const dotenv = require("dotenv");
const SequelizeConnect = require("./database/connection");
dotenv.config();

SequelizeConnect.sync({
  force: true,
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
