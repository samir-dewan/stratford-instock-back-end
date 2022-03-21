/** @format */

const warehouse = require("../models/Warehouse");
const inventories = require("../models/Inventory");

const listAllWarehouses = (_req, res) => {
  try {
    res.status(200).json(warehouse.getAllWarehouses());
  } catch {
    res.status(400).json({ error: `Warehouses Not Found` });
  }
};

const listWarehouseAndInventoryById = (_req, res) => {
  try {
    let warehouses = warehouse.getWarehouseById(_req.params.warehouseId);
    let inventory = inventories.getInventoryByWarehouseId(
      _req.params.warehouseId
    );
    let newWarehouse = warehouses.concat(inventory);
    res.status(200).json(newWarehouse);
  } catch {
    res
      .status(400)
      .json({
        error: `Warehouse with ID ${_req.params.warehouseId} not found`,
      });
  }
};

module.exports = {
  listAllWarehouses,
  listWarehouseAndInventoryById,
};
