const axios = require('axios');

const getScholarships = async (req, res) => {
    try {
        const response = await axios.get('https://api.scholarshipowl.com/scholarships');
        res.json(response.data);
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch scholarships' });
    }
};

module.exports = { getScholarships };