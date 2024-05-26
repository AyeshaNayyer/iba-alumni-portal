const express = require('express');
const router = express.Router();
const { events } = require('../models'); // Replace with the actual path to your Sequelize models

// Get a list of events
router.get('/', async (req, res) => {
  try {
    const listOfEvents = await events.findAll();
    res.json(listOfEvents);
  } catch (error) {
    console.error('Error fetching list of events:', error);
    res.status(500).json({ success: false, error: 'Internal Server Error' });
  }
});
router.post('/',async(req,res) => {
  const postevents = req.body
 await events.create(postevents);
 res.json(postevents);
});



module.exports = router;
