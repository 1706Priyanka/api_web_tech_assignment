const router = require("express").Router();
const inventoryModel = require("../models/inventory");
const ordersModel = require("../models/order");
const customerModel = require("../models/customer");

router.get("/inventory", async (req, res) => {
  const data = await inventoryModel.find();
  res.status(201).json({
    message: "success",
    data: data,
  });
});

router.get("/customer", async (req, res) => {
  const data = await customerModel.find();
  res.status(201).json({
    message: "success",
    data: data,
  });
});

let id = 0;

router.post("/createInventory", async (req, res) => {
  try {
    let inventory_id = `INTD${id}`;
    id = id + 1;
    const { inventory_type, item_name, available_quantity } = req.body;
    const inventryData = await inventoryModel.create({
      inventory_id,
      inventory_type,
      item_name,
      available_quantity,
    });
    res.status(201).json({
      message: "Success",
      data: inventryData,
    });
  } catch (e) {
    res.status(501).json({
      message: "failed",
      err: e.message,
    });
  }
});

let customerId = 0;

router.post("/createCustomer", async (req, res) => {
  try {
    let customer_id = `CUS${customerId}`;
    customerId = customerId + 1;
    const { customer_name, email } = req.body;
    const customerData = await customerModel.create({
      customer_id,
      customer_name,
      email,
    });

    res.status(401).json({
      message: "success",
      data: customerData,
    });
  } catch (e) {
    res.status(501).json({
      message: "failed",
      err: e.message,
    });
  }
});

// let customerId = 0;

router.post("/createOrders", async (req, res) => {
  try {
    const { email, item_name, quantity } = req.body;
    const cusData = await customerModel.find({ email: email });
    const invenData = await inventoryModel.find({ item_name: item_name });
    console.log(invenData + " <<<<<<<");
    console.log(invenData.inventory_id + " id");
    // const orderData = await ordersModel.create({
    //     customer_id: cusData.customer_id,
    //     inventory_id: invenData.inventory_id,
    //     item_name: item_name,
    //     quantity: quantity
    // })
    res.status(201).json({
      message: "success",
      data: "orderData",
    });
  } catch (e) {
    res.status(501).json({
      message: "failed",
      err: e.message,
    });
  }
});

module.exports = router;
