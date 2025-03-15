const mongoose = require('mongoose');

const scholarshipSchema = new mongoose.Schema({
    name: { type: String, required: true },
    deadline: { type: Date, required: true },
    description: { type: String, required: true }
});

module.exports = mongoose.model('Scholarship', scholarshipSchema);