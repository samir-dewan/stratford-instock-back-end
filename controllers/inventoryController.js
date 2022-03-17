const inventory = require("../models/Inventory");

const listAllInventories = (_req, res) => {
    try {
        res.status(200).json(inventory.getAllInventories());
        }
    catch {
        res.status(400).json({"errorMessage": "the list of inventories could not be retrieved."});
    }
}

const listSingleInventory = (req, res) => {
    try{
        inventory.getSingleInventory(req.params.id);
        res.status(200).json(inventory.getSingleInventory(req.params.id));
    }
    catch {
        res.status(400).json({"errorMessage": "the single inventory could not be found."});
    }
}
module.exports = {
  listAllInventories,
  listSingleInventory
};