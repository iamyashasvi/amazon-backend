module.exports = (sequelize, Sequelize) => {
  const Category = sequelize.define(
    "category",
    {
      CardID: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      CategoryName: {
        type: Sequelize.STRING,
        allowNull: false,
      },
    },
    { timestamps: false, freezeTableName: true }
  );
  Category.associate = (models) => {
    Category.hasMany(models.products, {
      foreignKey: "catId",
    });
  };
  return Category;
};
