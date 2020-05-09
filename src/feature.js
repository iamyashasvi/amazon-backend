const models = require("./models");
models.sequelize
  .sync()
  .then(() => models.feature.create({}))
  .then((data) => {
    console.log(data.toJSON());
  });
