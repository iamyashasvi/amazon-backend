require("dotenv").config({ path: "../.env" });
const Billing = require("./models/Billing");
const table = Billing.Billing;
const BillingAndMobileNumber = require("./models/Associate");
BillingAndMobileNumber.BillingAndMobileNumber();
table
  .sync({ force: true })
  .then(() =>
    table.create({
      BillingID: 56789,
      Amount: 45678,
      PaymentType: "UPI",
      Date: new Date(2020, 11, 11),
      itemID: 321,
      // mobileNumber
    })
  )
  .then((data) => {
    console.log(data.toJSON());
  });
