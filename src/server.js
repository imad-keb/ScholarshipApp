const express = require('express');
const connectDB = require('./config/db');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;


// Connect to MongoDB
connectDB();

// Middleware
app.use(express.json());

// Routes (we'll add these later)
app.get('/', (req, res) => {
    res.send('Hello, World!');
});

// Start server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});



const scholarshipRoutes = require('./routes/scholarshipRoutes');

// Routes
app.use('/api/scholarships', scholarshipRoutes);


const errorHandler = require('./utils/errorHandler');

// Error handling
app.use(errorHandler);