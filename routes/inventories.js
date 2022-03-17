const router = require("express").Router();
const inventoriesController = require("../controllers/inventoryController");

// responds with an array of warehouse objects
router.get("/", inventoriesController.listAllInventories);

// Add additional get requests here

module.exports = router;
