module.exports = (sequelize, Sequelize) => {
  const Itembuys = sequelize.define(
    "itemsbuy",
    {
      ItemID: Sequelize.INTEGER,
      Name: Sequelize.STRING,
      Quantity: Sequelize.INTEGER,
      Price: Sequelize.DOUBLE,
    },
    { freezeTableName: true }
  );
  return Itembuys;
};
