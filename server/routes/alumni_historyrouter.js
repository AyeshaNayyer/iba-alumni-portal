const express = require('express');
const router = express.Router();
const { alumnihistory } = require('../models'); // Replace with the actual path to your Sequelize models
// Get a list of alumni history records for a specific AlumniERP
router.get('/:AlumniERP', async (req, res) => {
  try {
    const { AlumniERP } = req.params;
    const alumniHistoryRecords = await alumnihistory.findAll({
      where: { AlumniERP: AlumniERP },
    });

    if (alumniHistoryRecords.length === 0) {
      return res.status(404).json({ error: 'No records found for AlumniERP' });
    }

    res.json(alumniHistoryRecords);
  } catch (error) {
    console.error('Error fetching alumni history records:', error);
    res.status(500).json({ success: false, error: 'Internal Server Error' });
  }
});


// Create a new alumni history record
router.post('/', async (req, res) => {
  try {
    const { AlumniERP, Company_ID, City, Country, Region } = req.body;

    // Assuming "alumnihistory" is your Sequelize model, create a new record
    const newAlumniHistory = await alumnihistory.create({
      AlumniERP: AlumniERP,
      Company_ID: Company_ID,
      City: City,
      Country: Country,
      Region: Region
    });

    res.json({ success: true, alumniHistory: newAlumniHistory });
  } catch (error) {
    console.error('Error creating alumni history record:', error);
    res.status(500).json({ success: false, error: 'Internal Server Error' });
  }
});

module.exports = router;
