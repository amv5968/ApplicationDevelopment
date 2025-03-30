const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();

const app = express();
app.use(express.json());

// Replace this with your actual MongoDB name
const mongoURI = "mongodb+srv://amv5968:GufsM0OPXkKAhF2Q@akash.lsy55.mongodb.net/?retryWrites=true&w=majority&appName=Akash";

mongoose.connect(mongoURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log(" Connected to MongoDB");

    const PORT = process.env.PORT || 4000;
    app.listen(PORT, () => {
        console.log(` Server running on port ${PORT}`);
    });
}).catch(err => {
    console.error(" MongoDB connection error:", err);
});

// Route imports
const customerRouter = require('./routes/customers');
const orderRouter = require('./routes/orders');

// Route mounting
app.use('/api/customers', customerRouter);
app.use('/api/orders', orderRouter);

// Optional test route
app.get("/", (req, res) => {
    res.send("API is running...");
});
