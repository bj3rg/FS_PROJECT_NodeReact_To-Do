const Sequelize = require("sequelize");
const dotenv = require("dotenv");
dotenv.config();

const SequelizeConnect = new Sequelize({
  dialect: "mysql",
  host: process.env.DB_HOST,
  password: process.env.DB_PASS,
  username: process.env.DB_USER,
  database: process.env.DB_DATABASE,
});

module.exports = SequelizeConnect;
