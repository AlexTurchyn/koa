const Sequelize = require('sequelize');

const sequelize = new Sequelize('practice-react', 'besql', 'password', {
  host: 'localhost',
  dialect: 'postgres',
  define: {
    timestamps: false
  }
});

module.exports = sequelize;