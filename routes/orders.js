const express = require('express');
const router = express.Router();
const Orders = require('../models/order');



// Create a new item
/**
    * @swagger
    * /orders:
    *   post:
    *     summary: Create a new order
    *     responses:
    *       201:
    *         description: Newly created order
    *       500:
    *         description: error message
    */
router.post('/', async (req, res) => {
  try {
    const newOrder = await Orders.create(req.body);
    res.status(201).json(newOrder);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});
/**
    * @swagger
    * /orders:
    *   get:
    *     summary: gets all order
    *     responses:
    *       201:
    *         description: get all order
    *       500:
    *         description: error message
    */
// Get all items
router.get('/', async (req, res) => {
  try {
    const orders = await Orders.find();
    res.json(orders);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Update an item
/**
    * @swagger
    * /orders:
    *   patch:
    *     summary: update a new order
    *     responses:
    *       201:
    *         description: update created order
    *       500:
    *         description: error message
    */
router.patch('/:id', async (req, res) => {
  try {
    const updatedOrders = await Orders.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(updatedOrders);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});
/**
    * @swagger
    * /orders:
    *   delete:
    *     summary: delete a new order
    *     responses:
    *       201:
    *         description: delete created order
    *       500:
    *         description: error message
    */
// Delete an item
router.delete('/:id', async (req, res) => {
  try {
    await Orders.findByIdAndDelete(req.params.id);
    res.json({ message: 'Order deleted' });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

module.exports = router;