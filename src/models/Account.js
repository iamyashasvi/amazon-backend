module.exports = (sequelize, Sequelize) => {
  const Account = sequelize.define(
    "account",
    {
      Name: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      MobileNumber: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        allowNull: false,
      },
      Email: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      Password: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      Gender: Sequelize.STRING,
      DateOfBirth: {
        type: Sequelize.DATEONLY,
        allowNull: true,
      },
    },
    { freezeTableName: true }
  );
  Account.associate = (models) => {
    Account.hasMany(models.address, {
      foreignKey: {
        name: "AddressID",
      },
    });
    Account.hasMany(models.billings, {
      foreignKey: "mobileNumber",
    });
  };
  return Account;
};
