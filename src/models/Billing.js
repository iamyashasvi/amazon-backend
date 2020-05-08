module.exports = (sequelize, Sequelize) => {
  console.log("runiingafa/..");
  const Billing = sequelize.define(
    "billings",
    {
      BillingID: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      Amount: Sequelize.INTEGER,
      PaymentType: {
        type: Sequelize.STRING,
      },
      Date: Sequelize.DATEONLY,
      itemID: Sequelize.INTEGER,
    },
    { timestamps: false, freezeTableName: true }
  );
  return Billing;
};
