import express from 'express';
const passport = require("passport");
import morgan from 'morgan';
import cors from 'cors';
import dotenv from 'dotenv-safe';
import bodyParser from 'body-parser';
import userController from  '../server/controller/user'
import taskController from '../server/controller/tasks';

dotenv.config({
  allowEmptyValues: true,
  example: './.env.example'
});
const app = express();
app.use(bodyParser.json());
const PORT = 3000 || process.env.PORT;
app.use(morgan('dev'));
app.use(passport.initialize());
app.use(userController);
app.use(taskController);
app.use(cors());
app.listen(PORT, () => console.log(`Running on localhost:${PORT}`));
