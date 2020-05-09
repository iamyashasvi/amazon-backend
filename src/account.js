const models = require("./models");
models.sequelize
  .sync()
  .then(() => models.account.create({}))
  .then((data) => {
    console.log(data.toJSON());
  });
