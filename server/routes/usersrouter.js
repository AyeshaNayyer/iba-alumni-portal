const express = require ('express');
const router = express.Router();
const {users} = require('../models');
const bcrypt = require('bcrypt');
const {sign} = require('jsonwebtoken')

router.post("/", async (req, res) => {
  const { ERP,FirstName, LastName, UserType , Password,ProgramId,Batch,Phone,LinkedIn,Email } = req.body;
  bcrypt.hash(Password, 10).then((hash) => {
    users.create({
      ERP: ERP,
      FirstName: FirstName,
      LastName : LastName,
      UserType : UserType,
      Password: hash,
      ProgramId: ProgramId,
      Batch: Batch,
      Phone: Phone,
      LinkedIn: LinkedIn,
      Email: Email,
     
    });
    res.json("SUCCESS");
  });
});
router.post("/login", async (req, res) => {
  const { ERP, Password } = req.body;

  const user = await users.findOne({ where: { ERP: ERP } });

  if (!user) res.json({ error: "User Doesn't Exist" });

  bcrypt.compare(Password, user.Password).then((match) => {
    if (!match) res.json({ error: "Wrong Username And Password Combination" });
    const accessToken = sign({ERP : user.ERP, id : user.id}, "importantsecret");
    res.json(accessToken);
  });
});
  

//router.post('/');
module.exports =router