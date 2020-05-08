module.exports = {
  mysql: {
    database: process.env.MYSQL_DATABASE,
    username: process.env.MYSQL_USERNAME,
    password: process.env.MYSQL_PASSWORD,
    pool: {
      max: 20,
      acquire: 30000,
      idle: 10000,
    },
    port: process.env.PORT || 3000,
  },
};
