const express = require ('express');
const router = express.Router();
const {program} = require('../models');

router.get('/',async(req,res) => {
const listofprogram = await program.findAll()
res.json(listofprogram);
});
router.post('/',async(req,res) => {
  const postprogram = req.body
 await fyp.create(postprogram);
 res.json(postprogram);
});

// Update the route to handle GET requests
router.get('/:programid', async (req, res) => {
  try {
    const programId = req.params.programid;
    const foundProgram = await program.findByPk(programId);

    if (foundProgram) {
      res.json({ programName: foundProgram.name });
    } else {
      res.status(404).json({ error: 'Program not found' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

//router.post('/');
module.exports =router