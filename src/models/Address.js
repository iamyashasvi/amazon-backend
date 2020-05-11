module.exports = (sequelize, Sequelize) => {
  let Address = sequelize.define(
    "address",
    {
      AddressID: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      Address1: Sequelize.STRING,
      Address2: Sequelize.STRING,
      Address3: Sequelize.STRING,
    },
    { timestamps: false, freezeTableName: true }
  );
  return Address;
};
