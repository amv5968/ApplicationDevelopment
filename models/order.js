const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
  items: { type: [String], required: true },
  deliveryID: {type: String, required: true}, 
  CustomerID: { type: String, required: true }
  
});

const Order = mongoose.model('Order', orderSchema);

module.exports = Order;

