module.exports = (sequelize, Sequelize) => {
  const Feature = sequelize.define(
    "feature",
    {
      featureID: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
      display: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      camera: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      title: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      Languages: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      Publisher: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      battery: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      Review: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      ProductDimensions: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      AmazonRank: {
        type: Sequelize.INTEGER,
        allowNull: true,
      },
      weight: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      colour: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      SoldBy: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      Brand: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      Model: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      WirelessTypes: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      NoiseLevel: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      Voltage: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      Material: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      Capacity: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      EnergyEfficiency: {
        type: Sequelize.STRING,
        allowNull: true,
      },
    },
    { timestamps: false, freezeTableName: true }
  );
  return Feature;
};
