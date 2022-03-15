require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
app.use(cors());

const PORT = process.env.PORT || 5000;
const warehouseRouter = require("./routes/warehouses");

app.use("/warehouses", warehouseRouter);

app.listen(PORT, () => {
	console.log(`App is listening on port ${PORT}`);
});
