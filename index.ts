//needed to install type definitions for node "npm i --save-dev @types/node"           
           //   vvv
const MySQL = require('mysql');

const connection = MySQL.createConnection({
    host: '127.0.0.1',
    user: 'devuser',
    password: 'Saint-14-2',
    database: 'classicmodels'
});
  
const [rows] =  connection.query('SELECT * FROM customers');
console.log(rows);

// closes the connection when finished
//connection.close();
