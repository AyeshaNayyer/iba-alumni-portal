const express = require('express');
const router = express.Router();
const { jobs } = require('../models'); // Replace with the actual path to your Sequelize models

// Create a new job
router.post("/", async (req, res) => {
  try {
    const { JobId, Title, AlumniERP, Companyid, Timing, ApplicationDeadline, Link, Internship, Location, Remote } = req.body;

    // Assuming "jobs" is your Sequelize model, create a new job instance
    const newJob = await jobs.create({
      JobId: JobId,
      Title: Title,
      AlumniERP: AlumniERP,
      Companyid: Companyid,
      Timing: Timing,
      ApplicationDeadline: ApplicationDeadline,
      Link: Link,
      Internship: Internship,
      Location: Location,
      Remote: Remote
    });

    res.json({ success: true, job: newJob });
  } catch (error) {
    console.error('Error creating job:', error);
    res.status(500).json({ success: false, error: 'Internal Server Error' });
  }
});

// Other routes can be added here...

module.exports = router;
