// searchrouter.js
const express = require('express');
const router = express.Router();
const { alumni } = require('../models');
const { Op } = require('sequelize');

router.get('/search', async (req, res) => {
  const { city, country, region, batch, programId, mentor } = req.query;
  console.log('Received search request:', { city, country, region, batch, programId, mentor });

  try {
    const whereClause = {};

    if (city) {
      whereClause.city = city;
    }

    if (country) {
      whereClause.country = country;
    }

    if (region) {
      whereClause.region = region;
    }

    if (batch) {
      whereClause.Batch = batch;
    }

    if (programId) {
      whereClause.ProgramID = programId;
    }

    if (mentor) {
      whereClause.Mentor = mentor;
    }

    const filteredAlumni = await alumni.findAll({
      where: whereClause,
    });

    console.log('Filtered alumni:', filteredAlumni);
    res.json(filteredAlumni);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});



module.exports = router;
