require("dotenv").config({ path: "./.env" });
const config = require("./config");
const express = require("express");
const app = express();
const PORT = config.mysql.port;

let model = require("./src/models");

model.sequelize.sync({ force: true }).then(() => {
  app.listen(PORT, () => console.log(`listening on port ${PORT}`));
});
