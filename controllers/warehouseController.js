const warehouse = require("../models/Warehouse");

const listAllWarehouses = (_req, res) => res.json(warehouse.getAllWarehouses());

module.exports = {
	listAllWarehouses,
};
