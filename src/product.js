require("dotenv").config({ path: "../.env" });
const Product = require("./models/Product");
const table = Product.Product;
const ProductTOCatFeaturePhoto = require("./models/Associate");
ProductTOCatFeaturePhoto.ProductTOCatFeaturePhoto();
table
  .sync({ force: true })
  .then(() =>
    table.create({
      ProductID: 678,
      Name: "Demo name",
      Price: 50000,
      AuthorName: "Grham Trump",
      Stock: 500000,
      Rating: 4.5,
      //   CatID: 34,
    })
  )
  .then((data) => {
    console.log(data.toJSON());
  });
