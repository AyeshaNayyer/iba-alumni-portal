const express = require ('express');
const router = express.Router();
const {alumni} = require('../models');
const {  program, company } = require('../models');
const bcrypt = require('bcrypt');
const {sign} = require('jsonwebtoken')



router.post("/", async (req, res) => {
  const { ERP,FirstName, LastName , Password,ProgramId,Batch,Phone,LinkedIn,Email, City, Country, Region, Mentor, Companyid } = req.body;
  bcrypt.hash(Password, 10).then((hash) => {
   alumni.create({
      ERP: ERP,
      FirstName: FirstName,
      LastName : LastName,
      Password: hash,
      ProgramId: ProgramId,
      Batch: Batch,
      Phone: Phone,
      LinkedIn: LinkedIn,
      Email: Email,
      City: City,
      Country: Country,
      Region: Region,
      Mentor: Mentor,
      Companyid: Companyid,
     
    });
    res.json("SUCCESS");
  });
});
router.post("/alumnilogin", async (req, res) => {
  const { ERP, Password } = req.body;

  const alumniuser = await alumni.findOne({ where: { ERP: ERP } });

  if (!alumniuser) res.json({ error: "User Doesn't Exist" });

  bcrypt.compare(Password, alumniuser.Password).then((match) => {
    if (!match) res.json({ error: "Wrong Username And Password Combination" });
    const accessToken = sign({ERP : alumniuser.ERP, id : alumniuser.id}, "importantsecret");
    res.json(accessToken);
  });
});
  

router.get('/:ERP', async (req, res) => {
  try {
    const { ERP } = req.params;

    // Fetch alumni details using the ERP
    const alumniDetails = await alumni.findOne({
      where: { ERP },
      attributes: [
        'ERP',
        'FirstName',
        'LastName',
        'Batch',
        'ProgramId',
        'Phone',
        'LinkedIn',
        'Email',
        'City',
        'Country',
        'Region',
        'Mentor',
        'Companyid',
        // Add other attributes you want to retrieve
      ],
    });

    if (!alumniDetails) {
      return res.status(404).json({ error: 'Alumni not found' });
    }


    res.json(alumniDetails);
  } catch (error) {
    console.error('Error fetching alumni details:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

//router.post('/');
module.exports =router