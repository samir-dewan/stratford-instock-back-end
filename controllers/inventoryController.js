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

const postToWarehouse = (req, res) => {
    try {
        console.log("in the controller");
            for (const key in req.body) {
                console.log("key is ", key, "value is", req.body[key]);
                if (req.body[key] == "") {
                    res.status(401).json(`errorMessage: have not posted to warehouse as ${key} doesn't have an input`)
                }
            }
        console.log("body is", req.body);
        const newItem = postInventory(req.body);
        // console.log(req.body);
        res.status(201).json(`new inventory added to warehouse ${req.body.warehouseName}`)
    }
    catch {
        res.status(401).json(`errorMessage: was not able to post to ${req.body.warehouseName}.`);
    }
}

module.exports = {
  listAllInventories,
  listSingleInventory,
  postToWarehouse
};