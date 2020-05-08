require("dotenv").config({ path: "./.env" });
const express = require("express");
const app = express();
const PORT = process.env.mysql.port;

let model = require("./src/models");

model.sequelize.sync({ force: true }).then(() => {
  app.listen(PORT, () => `listening on port ${PORT}`);
});
