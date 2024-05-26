const express = require('express');
const router = express.Router();
const { company } = require('../models'); // Replace with the actual path to your Sequelize models

// Get a list of companies
router.get('/', async (req, res) => {
  try {
    const listOfCompanies = await company.findAll();
    res.json(listOfCompanies);
  } catch (error) {
    console.error('Error fetching list of companies:', error);
    res.status(500).json({ success: false, error: 'Internal Server Error' });
  }
});

// Create a new company record
router.post('/', async (req, res) => {
  try {
    const { company_ID, Title } = req.body;

    // Assuming "company" is your Sequelize model, create a new record
    const newCompany = await company.create({
      company_ID: company_ID,
      Title: Title
    });

    res.json({ success: true, company: newCompany });
  } catch (error) {
    console.error('Error creating company record:', error);
    res.status(500).json({ success: false, error: 'Internal Server Error' });
  }
});
router.get('/:company_ID', async (req, res) => {
  try {
    const company_ID = req.params.company_ID;
    const foundCompany = await company.findOne({
      where: { company_ID: company_ID },
      attributes: ['Title'] // Include only the Title attribute in the result
    });

    if (foundCompany) {
      res.json({ success: true, companyName: foundCompany.Title });
    } else {
      res.status(404).json({ success: false, error: 'Company not found' });
    }
  } catch (error) {
    console.error('Error fetching company by company_ID:', error);
    res.status(500).json({ success: false, error: 'Internal Server Error' });
  }
});


module.exports = router;
