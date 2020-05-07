require("dotenv").config({ path: "../../.env" });
const config = require("../../config");
const Sequelize = require("sequelize");
const database = config.mysql.database;
const username = config.mysql.username;
const password = config.mysql.password;
const pool = config.mysql.pool;
const sequelize = new Sequelize(database, username, password, {
  dialect: "mysql",
  pool,
});

module.exports.ItemsBuy = sequelize.define(
  "itemsbuy",
  {
    ItemID: Sequelize.INTEGER,
    Name: Sequelize.STRING,
    Quantity: Sequelize.INTEGER,
    Price: Sequelize.DOUBLE,
  },
  { freezeTableName: true }
);
