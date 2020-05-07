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

module.exports.Photo = connection.define(
  "photo",
  {
    PhotoID: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    Photo_Address1: Sequelize.STRING,
    Photo_Address2: Sequelize.STRING,
    Photo_Address3: Sequelize.STRING,
    Photo_Address4: Sequelize.STRING,
  },
  { timestamps: false, freezeTableName: true }
);
