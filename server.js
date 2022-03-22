/** @format */
"use strict";

require("dotenv").config();
const uniqid = require("uniqid");
const express = require("express");
const fs = require("fs");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 5000;

const warehouseRouter = require("./routes/warehouses");
const inventoryRouter = require("./routes/inventories");

app.listen(PORT, () => {
  console.log(`App is listening on port ${PORT}`);
});

app.use(cors());
app.use(express.json());

app.use("/warehouses", warehouseRouter);

app.use("/inventories", inventoryRouter);

app.get("/randomId", (req, res) => {
  const newId = uniqid();
  res.send(newId);
});

//******** API To POST/CREATE A Warehouse ******** */
app.post("/warehouse/add-new", (req, res) => {
  const newWarehouse = {
    id: uniqid(),
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

//******** API To POST/CREATE A Warehouse ******** */
app.get("/:warehouseId", (req, res) => {
  const warehouseId = req.params.warehouseId;
  const fileContent = JSON.parse(fs.readFileSync("./data/warehouses.json"));
  for (let i = 0; i < fileContent.length; i++) {
	  console.log(fileContent[i]);
	  console.log(warehouseId);
    if (fileContent[i].id == warehouseId) {
      res.status(200).send(fileContent[i]);
    }
  }
});

app.delete("/:warehouseId", (req, res) => {
  const warehouseId = req.params.warehouseId;
  const warehouseContent = JSON.parse(
    fs.readFileSync("./data/warehouses.json")
  );
  const inventoryItems = JSON.parse(fs.readFileSync("./data/inventories.json"));
  const filteredWarehouses = warehouseContent.filter(
    (warehouses) => warehouses.id !== warehouseId
  );
  // console.log(filteredWarehouses);
  const filteredInventory = inventoryItems.filter(
    (inventory) => inventory.warehouseID !== warehouseId
  );
  // console.log(filteredInventory);

  fs.writeFileSync(
    "./data/warehouses.json",
    JSON.stringify(filteredWarehouses),
    "utf8",
    (err) => {
      if (err) {
        console.log(err);
      }
    }
  );
  res.status(200).json(filteredWarehouses);

  fs.writeFileSync(
    "./data/inventories.json",
    JSON.stringify(filteredInventory),
    "utf8",
    (err) => {
      if (err) {
        console.log(err);
      }
    }
  );
  res.status(200).json(filteredInventory);
});
