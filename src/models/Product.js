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

module.exports.Product = connection.define(
  "product",
  {
    ProductID: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    Name: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    Price: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    AuthorName: {
      type: Sequelize.STRING,
      allowNull: true,
    },
    Stock: {
      type: Sequelize.INTEGER,
      allowNull: true,
    },
    Rating: {
      type: Sequelize.FLOAT,
    },
    //catId, PhotoId, featureId
  },
  { timestamps: false }
);
