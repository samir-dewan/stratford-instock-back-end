const { builtinModules } = require("module");
const path = require("path");
const fs = require("fs");
const inventoriesJSONPath = path.join(__dirname, "../data/inventories.json");
let inventories = require(inventoriesJSONPath);


getAllInventories = () => inventories;

getSingleInventory = (id) => {
    const currInventory = inventories.find((inventory) => inventory.id === id);
        return currInventory;
}

module.exports = {
  getAllInventories,
  getSingleInventory
};
