const getScholarships = async (req, res) => {
    try {
        // Dummy data
        const scholarships = [
            {
                name: 'Scholarship 1',
                deadline: '2023-12-31',
                description: 'A scholarship for outstanding students.'
            },
            {
                name: 'Scholarship 2',
                deadline: '2024-01-15',
                description: 'A scholarship for students in STEM fields.'
            }
        ];

        res.json(scholarships);
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch scholarships' });
    }
};

module.exports = { getScholarships };