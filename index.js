const express = require('express');
const mongoose = require('mongoose');
const productRoute = require('./routes/product.route.js');

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Routes
app.use("/api/products", productRoute);

app.get('/', (req, res) => {
    res.send("Hello from Node API Server!");
});

// Mongoose connection string
mongoose.connect('mongodb://localhost:27017/test')
    .then(() => {
        console.log("Connected to database")
        app.listen(3000, () => {
            console.log("Server is running on port 3000")
        });
    })
    .catch(() => {
        console.log("Error connecting to database")
    })