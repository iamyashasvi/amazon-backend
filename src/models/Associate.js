const Address = require("./Address");
const Account = require("./Account");
const Product = require("./Product");
const Category = require("./Category");
const Photo = require("./Photo");
const Feature = require("./Feature");
const Billing = require("./Billing");
module.exports.AccountAndAddress = () => {
  // 1:N One Address may belongs to many user
  Address.Address.hasMany(Account.Account, {
    foreignKey: {
      name: "AddressID",
    },
  });
};

module.exports.ProductTOCatFeaturePhoto = () => {
  // 1:N
  Category.Category.hasMany(Product.Product, {
    foreignKey: "catId",
  });
  Photo.Photo.hasMany(Product.Product, {
    foreignKey: "PhotoId",
  });
  // 1:1
  Product.Product.belongsTo(Feature.Feature, {
    foreignKey: "featureId",
  });
};

module.exports.BillingAndMobileNumber = () => {
  Account.Account.hasMany(Billing.Billing, {
    foreignKey: "mobileNumber",
  });
};
