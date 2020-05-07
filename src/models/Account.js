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

module.exports.Account = sequelize.define(
  "account",
  {
    Name: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    MobileNumber: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      allowNull: false,
    },
    Email: {
      type: Sequelize.STRING,
      allowNull: true,
    },
    Password: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    // AddressID: {
    //   type: DataTypes.INTEGER,
    // },
    Gender: Sequelize.STRING,
    DateOfBirth: {
      type: Sequelize.DATEONLY,
      allowNull: true,
    },
  },
  { freezeTableName: true }
);
