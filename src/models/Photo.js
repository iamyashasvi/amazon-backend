module.exports = (sequelize, Sequelize) => {
  const Photo = sequelize.define(
    "photo",
    {
      PhotoID: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      Photo_Address1: Sequelize.STRING,
      Photo_Address2: Sequelize.STRING,
      Photo_Address3: Sequelize.STRING,
      Photo_Address4: Sequelize.STRING,
    },
    { timestamps: false, freezeTableName: true }
  );
  Photo.assocaite = (models) => {
    Photo.hasMany(models.products, {
      foreignKey: "PhotoId",
    });
  };
  return Photo;
};
