const router = require("express").Router();
const inventoriesController = require("../controllers/inventoryController");

// responds with an array of warehouse objects
router.get("/", inventoriesController.listAllInventories);
router.get("/:id", inventoriesController.listSingleInventory);
router.post("/add", inventoriesController.postToInventoriesList);
// Add additional get requests here

module.exports = router;