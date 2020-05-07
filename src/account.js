require("dotenv").config({ path: "../.env" });
const Account = require("./models/Account");
const table = Account.Account;
const AccountAndAddress = require("./models/Associate");
AccountAndAddress.AccountAndAddress();
table
  .sync({ force: true })
  .then(() =>
    table.create({
      Name: "Javed jain",
      MobileNumber: 320,
      Email: "khathordsingh@gmail.com",
      Password: "Phan Singh",
      AddressID: 101,
      Gender: "male",
      DateOfBirth: new Date(2020, 12, 12),
    })
  )
  .then((data) => {
    console.log(data.toJSON());
  });
