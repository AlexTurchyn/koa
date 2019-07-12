const sequelize = require('../lib/database');
const Sequelize = require('sequelize');


const Ideas = sequelize.define('ideas', {
  // attributes
  ideaid: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false
  },
  title: {
    type: Sequelize.STRING,
    allowNull: false
  },
  description: {
    type: Sequelize.STRING,
  },
  authorid: {
    type: Sequelize.INTEGER,
  }
}, {
  // options
});

module.exports = Ideas;