const express = require("express");
const router = express.Router();
const User = require("../models/User");
const { body, validationResult } = require('express-validator');

router.post("/createuser",
body('email','Invalid Email').isEmail(),
body('name').isLength({min:5}),
body('password',"Password must have minimum length of 5").isLength({min:5}),
 async (req, res) => {
    const errors=validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).send({errors:errors.array()});
    }
  try {
    await User.create({
      name: req.body.name,
      password: req.body.password,
      location: req.body.location,
      email: req.body.email,
    });
    res.json({ success: true });
  } catch (error) {
    console.log(error);
    res.json({ success: false });
  }
});


router.post("/loginuser",
body('email','Invalid Email').isEmail(),
body('password',"Password must have minimum length of 5").isLength({min:5}),async (req, res) => {
    const errors=validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).send({errors:errors.array()});
    }
  try {
    let email=req.body.email;
    const userData = await User.findOne({email})
    if(!userData){
        return res.status(400).json({errors:"Enter a valid Email"});
    }
    if(req.body.password!==userData.password){
        return res.status(400).json({errors:"Invalid Password"});
    }
    return res.json({success:true});
  } catch (error) {
    console.log(error);
    res.json({ success: false });
  }
});

module.exports = router;
