const models = require("./models");
models.sequelize
  .sync()
  .then(() => models.products.create({}))
  .then((data) => {
    console.log(data.toJSON());
  });
