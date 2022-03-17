const { builtinModules } = require("module");
const path = require("path");
const inventoriesJSONPath = path.join(__dirname, "../data/inventories.json");
let inventories = require(inventoriesJSONPath);

getAllInventories = () => inventories;

module.exports = {
  getAllInventories,
};
