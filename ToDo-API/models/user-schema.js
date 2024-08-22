// user-schema.js
const connection = require("../database/connection");
const Sequelize = require("sequelize");
const ToDo = require("./toDo-schema");
const User = connection.define("User", {
  id: {
    type: Sequelize.UUID,
    defaultValue: Sequelize.UUIDV4,
    allowNull: false,
    primaryKey: true,
  },
  name: {
    type: Sequelize.STRING,
    allowNull: false,
  },
});

// Define the one-to-many association

module.exports = User;
