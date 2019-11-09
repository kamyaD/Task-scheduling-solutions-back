// data base connection

const Sequelize = require('sequelize');
const env = process.env.NODE_ENV || 'development';
const db= {};

const config = require(__dirname + '/../config/config.json')[env];
const sequelize = new Sequelize(config.database, config.username, config.password, config);

db.sequelizeInstance = sequelize;
db.Sequelize = Sequelize;

export default db;
