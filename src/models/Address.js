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

module.exports.Address = sequelize.define(
  "address",
  {
    AddressID: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    Address1: Sequelize.STRING,
    Address2: Sequelize.STRING,
    Address3: Sequelize.STRING,
  },
  { timestamps: false, freezeTableName: true }
);
