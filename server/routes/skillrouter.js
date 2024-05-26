const express = require('express');
const router = express.Router();
const { skill } = require('../models'); // Replace with the actual path to your Sequelize models

// Get a list of skills
router.get('/', async (req, res) => {
  try {
    const listOfSkills = await skill.findAll();
    res.json(listOfSkills);
  } catch (error) {
    console.error('Error fetching list of skills:', error);
    res.status(500).json({ success: false, error: 'Internal Server Error' });
  }
});

// Create a new skill
router.post('/', async (req, res) => {
  try {
    const { skillid, title } = req.body;

    // Assuming "skill" is your Sequelize model, create a new record
    const newSkill = await skill.create({
      skillid: skillid,
      title: title
    });

    res.json({ success: true, skill: newSkill });
  } catch (error) {
    console.error('Error creating skill:', error);
    res.status(500).json({ success: false, error: 'Internal Server Error' });
  }
});

module.exports = router;
