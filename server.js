/** @format */

require("dotenv").config();
const { randomUUID } = require("crypto");
const express = require("express");
const fs = require("fs");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 8080;
// let warehouseDataAll = JSON.parse(fs.readFileSync("./data/warehouse.json"));
// let inventoriesData = JSON.parse(fs.readFileSync("./data/inventories.json"));

app.listen(PORT);
app.use(cors());
app.use(express.json());

app.get("/randomId", (req, res) => {
  const newId = randomUUID();
  res.send(newId);
});

//******** API To POST/CREATE A Warehouse ******** */
app.post("/warehouse/add-new", (req, res) => {
  const newWarehouse = {
    id: randomUUID(),
    warehouseName: req.body.warehouseId,
    streetAddress: req.body.streetAddress,
    city: req.body.city,
    country: req.body.country,
    contact: {
      contactName: req.body.contactName,
      position: req.body.position,
      phoneNumber: req.body.phoneNumber,
      email: req.body.email,
    },
  };

  const warehouseContent = JSON.parse(fs.readFileSync("./data/warehouse.json"));
  warehouseContent.push(newWarehouse);
  fs.writeFileSync("./data/warehouse.json", JSON.stringify(warehouseContent));
  res.status(201).json(newWarehouse);
});
