require("dotenv").config({ path: "../../.env" });
const config = require("../../config");
const Sequelize = require("sequelize");
const database = config.mysql.database;
const username = config.mysql.username;
const password = config.mysql.password;
const pool = config.mysql.pool;

const connection = new Sequelize(database, username, password, {
  dialect: "mysql",
  pool,
});

module.exports.Category = connection.define(
  "category",
  {
    CardID: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    CategoryName: {
      type: Sequelize.STRING,
      allowNull: false,
    },
  },
  { timestamps: false, freezeTableName: true }
);
