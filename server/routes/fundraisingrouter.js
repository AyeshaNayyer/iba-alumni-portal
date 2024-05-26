const express = require ('express');
const router = express.Router();
const {fundraising} = require('../models');

router.get('/',async(req,res) => {
const listoffundraising = await fundraising.findAll()
res.json(listoffundraising);
});
router.post('/',async(req,res) => {
  const postfundraising = req.body
 await fundraising.create(postfundraising);
 res.json(postfundraising);
});
//router.post('/');
module.exports =router