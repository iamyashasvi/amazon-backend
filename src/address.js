// require("dotenv").config({ path: "../.env" });
// const Address = require("./models/Address");
require("dotenv").config({ path: "../.env" });
const config = require("../config");
const Sequelize = require("sequelize");
const database = config.mysql.database;
const username = config.mysql.username;
const password = config.mysql.password;
const pool = config.mysql.pool;
const sequelize = new Sequelize(database, username, password, {
  dialect: "mysql",
  pool,
});
const Address = require("./models/Address");
const table = Address.Address;

table
  .sync({ force: true })
  .then(() =>
    table.create({
      AddressID: 101,
      Address1: "demo",
      Address2: "demo",
      Address3: "demo",
    })
  )
  .then((data) => {
    console.log(data.toJSON());
  });
