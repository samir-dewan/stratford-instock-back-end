const { builtinModules } = require("module");
const path = require("path");
const uniqid = require("uniqid");
const fs = require("fs");
const inventoriesJSONPath = path.join(__dirname, "../data/inventories.json");
let inventories = require(inventoriesJSONPath);
const warehousesJSONPath = path.join(__dirname, "../data/warehouses.json");
let warehouses = require(warehousesJSONPath);

const readData = (path) => {
  return JSON.parse(fs.readFileSync(path));
};

const writeData = (item) => {
  fs.writeFileSync(inventoriesJSONPath, JSON.stringify(item), "utf8", (err) => {
      if (err) {
          console.log("there has been an error in writing the data: ", err);
      }
  });
  console.log(`changes ${item} saved to file ${inventoriesJSONPath}.`)
};

getAllInventories = () => inventories;

getSingleInventory = (id) => {
    const currInventory = inventories.find((inventory) => inventory.id === id);
        return currInventory;
}


postInventory = (data) => {
    const readList = readData(inventoriesJSONPath);
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
}

module.exports = {
  getAllInventories,
  getSingleInventory,
  postInventory
};
