require("dotenv").config({ path: "../.env" });
const config = require("../config");
const Photo = require("./models/Photo");
const table = Photo.Photo;
// const AccountAndAddress = require("./models/Associate");
// AccountAndAddress.AccountAndAddress();
table
  .sync({ force: true })
  .then(() =>
    table.create({
      PhotoID: 5678,
      Photo_Address1: "demo",
      Photo_Address2: "demo",
      Photo_Address3: "demo",
      Photo_Address4: "demo",
    })
  )
  .then((data) => {
    console.log(data.toJSON());
  });
