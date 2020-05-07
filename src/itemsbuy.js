require("dotenv").config({ path: "../.env" });
const ItemsBuy = require("./models/ItemsBuy");
const table = ItemsBuy.ItemsBuy;

table
  .sync({ force: true })
  .then(() =>
    table.create({
      ItemID: 321,
      Name: "Detello",
      Quantity: 3,
      Price: 678.789,
    })
  )
  .then((data) => {
    console.log(data.toJSON());
  });
