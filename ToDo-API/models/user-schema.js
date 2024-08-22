const { type } = require("os");
const connection = require("../database/connection");
const Sequelize = require("sequelize");
const ToDo = require("../models/toDo-schema");
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

User.hasMany(ToDo);

module.exports = User;
