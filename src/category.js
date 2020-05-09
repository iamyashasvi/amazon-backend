const models = require("./models");
models.sequelize
  .sync()
  .then(() => models.category.create({}))
  .then((data) => {
    console.log(data.toJSON());
  });
