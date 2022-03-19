const path = require("path");
const warehousesJSONPath = path.join(__dirname, "../data/warehouses.json");
let warehouses = require(warehousesJSONPath);

getAllWarehouses = () => warehouses;

getWarehouseIDByName = (name) => {
	const currWarehouse = warehouses.find((warehouse) => warehouse.warehouseName === name);
	return currWarehouse;
}

module.exports = {
	getAllWarehouses,
};
