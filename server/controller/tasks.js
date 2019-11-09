const express = require('express');
import db from "../models/index"
import authenticateUser from "../auth";

const router = express.Router();

const Task = require('../models/tasks')(db.sequelizeInstance, db.Sequelize);


router.get('/tasks', async (req, res) => {
  const user = authenticateUser(req, res);

  if(user && user.data){
    try {
      let tasks = await Task.tasks(res);
      return res.json(tasks);
    } catch (err) {
      return res.status(400).json(err);
    }
  }

});

module.exports = router;

