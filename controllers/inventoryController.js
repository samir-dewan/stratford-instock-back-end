const inventory = require("../models/Inventory");
const warehouse = require("../models/Warehouse");

const listAllInventories = (_req, res) => {
    try {
        res.status(200).json(inventory.getAllInventories());
        }
    catch {
        res.status(400).json({"errorMessage": "the list of inventories could not be retrieved."});
    }
}

const listSingleInventory = (req, res) => {
    try {
        inventory.getSingleInventory(req.params.id);
        res.status(200).json(inventory.getSingleInventory(req.params.id));
    }
    catch {
        res.status(400).json({"errorMessage": "the single inventory could not be found."});
    }
}

const postToInventoriesList = (req, res) => {
    try {
            for (const key in req.body) {
                if (req.body[key] == "") {
                    res.status(401).json(`errorMessage: have not posted to warehouse as ${key} doesn't have an input`)
                }
            }
        postInventory(req.body);
        // console.log(req.body);
        res.status(201).json(`new inventory added to warehouse ${req.body.warehouseName}`)
    }
    catch {
        res.status(401).json(`errorMessage: was not able to post to ${req.body.warehouseName}.`);
    }
}

const editInventoryByID = (req, res) => {
  try {
    for (const key in req.body) {
      if (req.body[key] == "") {
        res.status(401).json(`errorMessage: have not posted to warehouse as ${key} doesn't have an input`)
      }
    }
    console.log("param.id is, ", req.params.id);
    const edit = editInventory(req.params.id, req.body);
    res.status(201).json(`inventory ${edit.itemName} under ID ${req.params.id} edited`)
  }
  catch {
    res.status(401).json(`errorMessage: was not able to edit ${req.body.itemName} (id is ${req.params.id}).`);
  }
}
module.exports = {
  listAllInventories,
  listSingleInventory,
  postToInventoriesList,
  editInventoryByID
};