/** @format */

const router = require("express").Router();
const inventoriesController = require("../controllers/inventoryController");

// responds with an array of all inventories
router.get("/", inventoriesController.listAllInventories);

// responds with a single inventory
router.get("/:id", inventoriesController.listSingleInventory);

// responds with the inventory of a warehouse by its warehouseID
router.get(
  "/warehouse/:warehouseId",
  inventoriesController.listInventoryByWarehouseId
);
router.post("/add", inventoriesController.postToWarehouse);
// Add additional get requests here

module.exports = router;
