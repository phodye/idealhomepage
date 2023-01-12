const fs = require('fs')
const pool = require('./pool.js')

const createTables = fs.readFileSync('./database/db.sql').toString();

pool.connect((err, client, release) => {
  if (err) {
    return console.error('Error acquiring client', err.stack)
  }
  console.log('creating tables')
  pool.query(createTables, function(err, result){
    if(err){
        console.log('error: ', err);
        process.exit(0);
    }
    console.log('created tables in database')
  });
  console.log(`connected to '${client.database}' on port ${client.port}`)
})