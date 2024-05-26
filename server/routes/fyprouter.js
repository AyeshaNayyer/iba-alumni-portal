const express = require ('express');
const router = express.Router();
const {fyp} = require('../models');

router.get('/',async(req,res) => {
const listoffyp = await fyp.findAll()
res.json(listoffyp);
});
router.post('/',async(req,res) => {
  const postfyp = req.body
 await fyp.create(postfyp);
 res.json(postfyp);
});
//router.post('/');
module.exports =router