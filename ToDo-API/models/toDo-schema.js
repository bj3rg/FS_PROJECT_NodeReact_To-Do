const connection = require("../database/connection");
const Sequelize = require("sequelize");
const User = require("../models/user-schema");
const ToDo = connection.define(
  "ToDo",
  {
    id: {
      type: Sequelize.UUID,
      defaultValue: Sequelize.UUIDV4,
      primaryKey: true,
      allowNull: false,
    },
    user_id: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    item: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    isDone: {
      type: Sequelize.BOOLEAN,
      defaultValue: false,
    },
  },
  {
    timestamps: true,
    tableName: "ToDo",
  }
);

ToDo.associate = (models) => {
  ToDo.belongsTo(models.User, { foreignKey: "id", as: "todo" });
};
module.exports = ToDo;
