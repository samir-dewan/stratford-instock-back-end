/** @format */
"use strict";

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
    warehouseName: req.body.warehouseName,
    streetAddress: req.body.streetAddress,
    city: req.body.city,
    country: req.body.country,
    contact: {
      contactName: req.body.contact.contactName,
      position: req.body.contact.position,
      phoneNumber: req.body.contact.phoneNumber,
      email: req.body.contact.email,
    },
  };
  const warehouseContent = JSON.parse(
    fs.readFileSync("./data/warehouses.json")
  );
  warehouseContent.push(newWarehouse);
  fs.writeFileSync("./data/warehouses.json", JSON.stringify(warehouseContent));
  res.status(201).json(newWarehouse);
});
