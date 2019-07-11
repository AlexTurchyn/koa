// const { Client } = require('pg');

// module.exports ={
//  getConnection: async () => { 
//     const client = new Client({
//       user: 'besql',
//       password: 'password',
//       database: 'practice-react'
//     });

//     await client.connect();
//     return client;
//     }
// }

const Sequelize = require('sequelize');

const sequelize = new Sequelize('practice-react', 'besql', 'password', {
  host: 'localhost',
  dialect: 'postgres',
  define: {
    timestamps: false
  }
});

module.exports = sequelize;