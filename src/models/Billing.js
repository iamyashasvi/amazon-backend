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

module.exports.Billing = connection.define(
  "billing",
  {
    BillingID: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    Amount: Sequelize.INTEGER,
    PaymentType: {
      type: Sequelize.STRING,
    },
    Date: Sequelize.DATEONLY,
    itemID: Sequelize.INTEGER,
  },
  { timestamps: false }
);
