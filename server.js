/** @format */

require("dotenv").config();

const express = require("express");
const fs = require("fs");

const app = express();
const PORT = process.env.PORT || 8080;
let warehouseDataAll = JSON.parse(fs.readFileSync("./data/warehouse.json"));
let inventoriesData = JSON.parse(fs.readFileSync("./data/inventories.json"));

app.listen(PORT);

//******** API To POST/CREATE A Warehouse ******** */
app.post("/upload", (req, res) => {
  const newVideo = {
    id: randomUUID(),
    warehouseName: req.body.warehouseId,
    streetAddress: req.body.streetAddress,
    city: req.body.city,
    country: req.body.country,
    contactName: req.body.contactName,
    position: req.body.position,
    phoneNumber: req.body.phoneNumber,
    email: req.body.email,
  };

  const fileContent = JSON.parse(fs.readFileSync("./data/video.json"));
  fileContent.push(newVideo);
  fs.writeFileSync("./data/video.json", JSON.stringify(fileContent));

  res.status(201).json(newVideo);
});
