const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(bodyParser.json());

// MongoDB Connection
mongoose.connect('mongodb+srv://amv5968:tJpEyvheZpxjVT6H@cluster0.l3utuhx.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
  console.log('Connected to MongoDB');
});

// Routes
const itemsRouter = require('./routes/items');
app.use('/items', itemsRouter);

const customersRouter = require('./routes/customers');
app.use('/customers', customersRouter);

const orderRouter = require('./routes/orders');
app.use('/orders', orderRouter);
// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});