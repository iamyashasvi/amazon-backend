module.exports = (sequelize, Sequelize) => {
  const Product = sequelize.define(
    "products",
    {
      ProductID: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      Name: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      Price: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      AuthorName: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      Stock: {
        type: Sequelize.INTEGER,
        allowNull: true,
      },
      Rating: {
        type: Sequelize.FLOAT,
      },
      //catId, PhotoId, featureId
    },
    { timestamps: false }
  );
  Product.associate = (models) => {
    Product.belongsTo(models.feature, {
      foreignKey: "featureId",
    });
  };
  return Product;
};
