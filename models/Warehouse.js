const path = require("path");
const warehousesJSONPath = path.join(__dirname, "../data/warehouses.json");
let warehouses = require(warehousesJSONPath);

class Warehouse {
	constructor(id, name, address, city, country, contact) {
		this.id = id;
		this.name = name;
		this.address = address;
		this.city = city;
		this.country = country;
		this.contact = contact;
	}

	static getAllWarehouses = () => warehouses;
}

module.exports = Warehouse;
