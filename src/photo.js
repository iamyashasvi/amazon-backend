const models = require("./models");
models.sequelize
  .sync()
  .then(() => models.photo.create({}))
  .then((data) => {
    console.log(data.toJSON());
  });
