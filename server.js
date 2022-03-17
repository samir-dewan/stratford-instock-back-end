/** @format */

require("dotenv").config();

const express = require("express");
const fs = require("fs");

const app = express();
const PORT = process.env.PORT || 8080;
let warehouseDataAll = JSON.parse(fs.readFileSync("./data/warehouse.json"));
let inventoriesData = JSON.parse(fs.readFileSync("./data/inventories.json"));

app.listen(PORT);

//******** API To Get All Warehouse Data ******** */
app.get("/", (req, res) => {
  const homeWarehouse = warehouseDataAll.map(warehouse);

  res.send(warehouseData);
});

//******** API To Get Home Page ******** */
router.get("/", (req, res) => {
  const newItem = video.map((item) => {
    return {
      id: item.id,
      title: item.title,
      channel: item.channel,
      image: item.image,
    };
  });
  res.status(200).send(newItem);
});
