const express = require('express');
const router = express.Router();
const Customers = require('../models/customer');

// Create a new Customer
/**
    * @swagger
    * /:
    *   post:
    *     summary: Create a new Customer
    *     responses:
    *       201:
    *         description: Newly created Customer
    *       400:
    *         description: Missing required fields
    *       500:
    *         description: error message
    */
router.post('/', async (req, res) => {
  try {
    const { name, lastname, address, zipcode, state } = req.body;

    // Validate required fields
    if (!name || !lastname || !address || !zipcode || !state) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const newCustomer = await Customers.create(req.body);
    res.status(201).json(newCustomer);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

/**
    * @swagger
    * /customers:
    *   get:
    *     summary: get all customers
    *     responses:
    *       200:
    *         description: get all customers
    *       500:
    *         description: error message
    */
// Get all customers
router.get('/', async (req, res) => {
  try {
    const customers = await Customers.find();
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
    *       200:
    *         description: update customers
    *       400:
    *         description: Invalid data
    *       500:
    *         description: error message
    */
// Update a customer
router.patch('/:id', async (req, res) => {
  try {
    const updatedCustomer = await Customers.findByIdAndUpdate(req.params.id, req.body, { new: true });
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
    *       200:
    *         description: delete a customer
    *       400:
    *         description: Invalid customer ID
    *       500:
    *         description: error message
    */
// Delete a customer
router.delete('/:id', async (req, res) => {
  try {
    await Customers.findByIdAndDelete(req.params.id);
    res.json({ message: 'Customer deleted' });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

module.exports = router;
