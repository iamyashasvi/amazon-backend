require("dotenv").config({ path: "../.env" });
const config = require("../config");
const Feature = require("./models/Feature");
const table = Feature.Feature;
// const AccountAndAddress = require("./models/Associate");
// AccountAndAddress.AccountAndAddress();
table
  .sync({ force: true })
  .then(() =>
    table.create({
      featureID: 768,
      display: "DemoLCD",
      camera: "320px",
      title: "Mobile things",
      Languages: "English",
      Publisher: "Austraila",
      battery: "3MP",
      Review: "Good but not enough",
      ProductDimensions: "3X3cm2",
      AmazonRank: 678,
      weight: "500gram",
      colour: "Blue",
      SoldBy: "Augest",
      Brand: "Rolax",
      Model: "Atm",
      WirelessTypes: "yes",
      NoiseLevel: "High",
      Voltage: "400V",
      Material: "aluminuim",
      Capacity: "500L",
      EnergyEfficiency: "8KM/Hr",
    })
  )
  .then((data) => {
    console.log(data.toJSON());
  });
