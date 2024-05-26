const express = require('express');
const router = express.Router();
const { jobskill } = require('../models'); // Replace with the actual path to your Sequelize models

// Get a list of job-skill relationships
router.get('/', async (req, res) => {
  try {
    const listOfJobSkills = await jobskill.findAll();
    res.json(listOfJobSkills);
  } catch (error) {
    console.error('Error fetching list of job-skill relationships:', error);
    res.status(500).json({ success: false, error: 'Internal Server Error' });
  }
});

// Create a new job-skill relationship
router.post('/', async (req, res) => {
  try {
    const { job_id, skill_id } = req.body;

    // Assuming "jobskill" is your Sequelize model, create a new record
    const newJobSkill = await jobskill.create({
      job_id: job_id,
      skill_id: skill_id
    });

    res.json({ success: true, jobSkill: newJobSkill });
  } catch (error) {
    console.error('Error creating job-skill relationship:', error);
    res.status(500).json({ success: false, error: 'Internal Server Error' });
  }
});

module.exports = router;
