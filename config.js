module.exports = {
  mysql: (() => {
    switch (process.env.NODE_ENV) {
      case "development":
        return {
          database: process.env.MYSQL_DATABASE,
          username: process.env.MYSQL_USERNAME,
          password: process.env.MYSQL_PASSWORD,
          pool: {
            max: 20,
            acquire: 30000,
            idle: 10000,
          },
        };
      default:
        return {
          database: process.env.MYSQL_DATABASE,
          username: process.env.MYSQL_USERNAME,
          password: process.env.MYSQL_PASSWORD,
          pool: {
            max: 20,
            acquire: 30000,
            idle: 10000,
          },
        };
    }
  })(),
  NODE_ENV: process.env.NODE_ENV,
  PORT: process.env.PORT || 7000,
};
