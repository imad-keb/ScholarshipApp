const express = require('express');
const { getScholarships } = require('../controllers/scholarshipController'); // Import the controller
const router = express.Router();

// Use the getScholarships function from the controller
router.get('/', getScholarships);

module.exports = router;