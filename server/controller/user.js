const express = require('express');

import db from "../models/index"

const router = express.Router();

const User = require('../models/user')(db.sequelizeInstance, db.Sequelize);



router.post('/login', async (req, res, next) => {
  const { phone, password } = req.body;
  if (!phone || !password) {
    return res.status(400).send(
        'Request missing username or password param'
    );
  }
  const getAuthUser = (user) => {
    return res.json(user);
  };
  try {

    let user = await User.authenticate(req, res, next, getAuthUser);
  } catch (error) {
    const message = {
      "error":{
        "password": "You have entered an incorrect password"
      }
    };
    return res.status(400).json(message);
  }

});

module.exports = router;


