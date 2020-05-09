const models = require("./models");
models.sequelize
  .sync()
  .then(() => models.itemsbuy.create({}))
  .then((data) => {
    console.log(data.toJSON());
  });
