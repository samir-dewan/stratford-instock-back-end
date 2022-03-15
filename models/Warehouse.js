const path = require("path");
const warehousesJSONPath = path.join(__dirname, "../data/warehouses.json");
let warehouses = require(warehousesJSONPath);

getAllWarehouses = () => warehouses;

module.exports = {
	getAllWarehouses,
};
