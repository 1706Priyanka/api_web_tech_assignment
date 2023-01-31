const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const orderModel = new Schema({
  customer_id: { type: String },
  inventory_id: { type: String },
  item_name: { type: String },
  quantity: { type: Number },
});

const Orders = mongoose.model("OrdersData", orderModel);

module.exports = Orders;
