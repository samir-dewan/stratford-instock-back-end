require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
app.use(cors());

app.use(express.json());
app.use(cors());

const PORT = process.env.PORT || 5000;
const warehouseRouter = require("./routes/warehouses");
const inventoryRouter = require("./routes/inventories");

app.use("/warehouses", warehouseRouter);
app.use("/inventories", inventoryRouter);
app.listen(PORT, () => {
	console.log(`App is listening on port ${PORT}`);
});
