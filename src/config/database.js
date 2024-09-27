// config/database.js

const { Sequelize } = require('sequelize');

const sequelize = new Sequelize(
  'samp_paradox_server', 
  'samp_paradox_17', 
  'MI078HH8!oF8', 
  {
    host: 'samp1.dopminer.host',
    dialect: 'mysql',
  }
);

module.exports = sequelize;