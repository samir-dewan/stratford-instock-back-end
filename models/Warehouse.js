/** @format */

const path = require("path");
const warehousesJSONPath = path.join(__dirname, "../data/warehouses.json");
let warehouses = require(warehousesJSONPath);

getAllWarehouses = () => warehouses;

getWarehouseById = (id) => {
  let warehouse = warehouses.filter((warehouse) => id === warehouse.id);
  return warehouse;
};
getWarehouseIDByName = (name) => {
  const currWarehouse = warehouses.find(
    (warehouse) => warehouse.warehouseName === name
  );
  return currWarehouse;
};

module.exports = {
  getAllWarehouses,
  getWarehouseById,
};
