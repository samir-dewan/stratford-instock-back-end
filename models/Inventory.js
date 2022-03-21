/** @format */

const { builtinModules } = require("module");
const path = require("path");
const uniqid = require("uniqid");
const fs = require("fs");
const { deleteInventory } = require("../controllers/inventoryController");
const inventoriesJSONPath = path.join(__dirname, "../data/inventories.json");
let inventories = require(inventoriesJSONPath);
const warehousesJSONPath = path.join(__dirname, "../data/warehouses.json");
let warehouses = require(warehousesJSONPath);

const readData = (path) => {
  console.log("reading data...");
  return JSON.parse(fs.readFileSync(path));
};

const writeData = (item) => {
  fs.writeFileSync(inventoriesJSONPath, JSON.stringify(item), "utf8", (err) => {
    if (err) {
      console.log("there has been an error in writing the data: ", err);
    }
  });
  console.log(`changes ${item} saved to file ${inventoriesJSONPath}.`);
};

getAllInventories = () => inventories;

getSingleInventory = (id) => {
  const currInventory = inventories.find((inventory) => inventory.id === id);
  console.log("currInventory is", currInventory);
  return currInventory;
};

getInventoryByWarehouseId = (id) => {
  let arr = inventories.filter((item) => item.warehouseID === id);
  return arr;
};

postInventory = (data) => {
    const readList = readData(inventoriesJSONPath);
    if (data.status === "0") {
      data.status = "Out of stock";
    } else if (data.status === "1") {
      data.status = "In stock";
    } else {
      return "Error: nothing in status, please fill in."
    }
    const currWarehouse = warehouses.find((warehouse) => warehouse.name === data.warehouseName);
    const newItem = {
        id: uniqid(),
        warehouseID: currWarehouse.id,
        ...data
    }
    console.log(newItem);
    readList.push(newItem);
    writeData(readList);
    return newItem;
};


editInventory = (id, data) => {
  console.log(id);
  const readList = readData(inventoriesJSONPath);
  console.log(readList);
  if (data.status === "0") {
      data.status = "Out of stock";
      console.log("data.status is: ", data.status);
    } else if (data.status === "1") {
      data.status = "In stock";
      console.log("data.status is: ", data.status);
    } else {
      return "Error: nothing in status, please fill in.";
    };
  const editedInventory = getSingleInventory(id);
  console.log(editedInventory);
  console.log("about to run the for loop");
  for (key in editedInventory) {
    if (editedInventory[key] !== data[key] && key !== "id" && key !== "warehouseID") {
      editedInventory[key] = data[key];
    }
    }
    readList.pop(getSingleInventory(id));
    readList.push(editedInventory);
    writeData(readList);
  return editedInventory;
}

module.exports = {
  getAllInventories,
  getSingleInventory,
  getInventoryByWarehouseId,
  postInventory,
  editInventory
};
