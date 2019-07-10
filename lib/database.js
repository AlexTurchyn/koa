const { Client } = require('pg');

module.exports ={
 getConnection: async () => { 
    const client = new Client({
      user: 'besql',
      password: 'password',
      database: 'practice-react'
    });

    await client.connect();
    return client;
    }
}