const express = require('express');
const router = express.Router();
const Customers = require('../models/customer');

// Create a new item

/**
    * @swagger
    * /:
    *   post:
    *     summary: Create a new Customer
    *     responses:
    *       201:
    *         description: Newly created Customer
    *       500:
    *         description: error message
    */
router.post('/', async (req, res) => {
  try {
    const newCustomer = await Customers.create(req.body);
    res.status(201).json(newCustomer);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});
/**
    * @swagger
    * /customers:
    *   get:
    *     summary: get all customers
    *     responses:
    *       201:
    *         description: get all customers
    *       500:
    *         description: error message
    */
// Get all items
router.get('/', async (req, res) => {
  try {
    const customers = await customers.find();
    res.json(customers);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});
/**
    * @swagger
    * /customers:
    *   patch:
    *     summary: update customers
    *     responses:
    *       201:
    *         description: update customers
    *       500:
    *         description: error message
    */
// Update an item
router.patch('/:id', async (req, res) => {
  try {
    const updatedCustomer = await customer.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(updatedCustomer);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});
/**
    * @swagger
    * /customers:
    *   delete:
    *     summary: delete a customer
    *     responses:
    *       201:
    *         description: delete a customer
    *       500:
    *         description: error message
    */
// Delete an item
router.delete('/:id', async (req, res) => {
  try {
    await customer.findByIdAndDelete(req.params.id);
    res.json({ message: 'Customer deleted' });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

module.exports = router;