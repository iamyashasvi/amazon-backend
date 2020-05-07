require("dotenv").config({ path: "../.env" });
const Category = require("./models/Category");

const table = Category.Category;

table
  .sync()
  .then(() =>
    table.create({
      CardID: 5677,
      CategoryName: "demo category",
    })
  )
  .then((data) => {
    console.log(data.toJSON());
  });
