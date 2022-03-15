const Warehouse = require("../models/Warehouse");

const listAllWarehouses = (_req, res) => res.json(Warehouse.getAllWarehouses());

module.exports = {
	listAllWarehouses,
};
