const router = require("express").Router();
const warehouseController = require("../controllers/warehouseController");

// responds with an array of warehouse objects
router.get("/", warehouseController.listAllWarehouses);

// Add additional get requests here
router.get("/:warehouseId", warehouseController.listWarehouseAndInventoryById);

module.exports = router;
