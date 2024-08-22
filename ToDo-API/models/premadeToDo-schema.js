const connection = require("../database/connection");
const Sequelize = require("sequelize");

const Premade = connection.define("Premade", {
  id: {
    type: Sequelize.UUID,
    defaultValue: Sequelize.UUIDV4,
    allowNull: false,
    primaryKey: true,
  },
  item: {
    type: Sequelize.STRING,
    allowNull: false,
  },
});

module.exports = Premade;
