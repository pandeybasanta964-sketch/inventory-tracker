const express = require('express');
const mongoose = require('mongoose');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// MongoDB connection
const dbURI = 'your_mongodb_connection_string'; // Update with your MongoDB connection string
mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('MongoDB connected!'))
    .catch(err => console.log('MongoDB connection error:', err));

// Basic routes
app.get('/', (req, res) => {
    res.send('Welcome to the Inventory Tracker!');
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
