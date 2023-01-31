const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const InventryModel = new Schema({
  inventory_id: { type: String },
  inventory_type: { type: String },
  item_name: { type: String },
  available_quantity: { type: Number },
});

const Inventory = mongoose.model("inventryData", InventryModel);

module.exports = Inventory;
