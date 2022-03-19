const path = require("path");
const warehousesJSONPath = path.join(__dirname, "../data/warehouses.json");
let warehouses = require(warehousesJSONPath);

getAllWarehouses = () => warehouses;

getWarehouseById = (id) => {
  let warehouse = warehouses.filter((warehouse) => id === warehouse.id);
  return warehouse;
};

module.exports = {
  getAllWarehouses,
  getWarehouseById
};
