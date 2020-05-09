const models = require("./models");
models.sequelize
  .sync()
  .then(() => models.address.create({}))
  .then((data) => {
    console.log(data.toJSON());
  });
