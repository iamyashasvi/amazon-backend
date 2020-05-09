const models = require("./models");
models.sequelize
  .sync()
  .then(() => models.billings.create({}))
  .then((data) => {
    console.log(data.toJSON());
  });
