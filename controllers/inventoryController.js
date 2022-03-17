const inventory = require("../models/Inventory");

const listAllInventories = (_req, res) => res.json(inventory.getAllInventories());

module.exports = {
  listAllInventories,
};
