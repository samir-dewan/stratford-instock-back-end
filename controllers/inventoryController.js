const inventory = require("../models/Inventory");

const listAllInventories = (_req, res) => {
    try {
        res.status(200).json(inventory.getAllInventories());
        }
    catch {
        res.status(400).json({"errorMessage": "the list of inventories could not be retrieved."});
    }
}

module.exports = {
  listAllInventories,
};