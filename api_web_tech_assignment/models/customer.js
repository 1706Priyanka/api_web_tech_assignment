const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const customerModel = new Schema({
  customer_id: { type: String },
  customer_name: { type: String },
  email: { type: String, unique: true },
});

const Customer = mongoose.model("customerData", customerModel);

module.exports = Customer;
