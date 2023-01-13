//needed to install type definitions for node "npm i --save-dev @types/node"           
//   vvv
var MySQL = require('mysql');
var connection = MySQL.createConnection({
    host: '127.0.0.1',
    user: 'devuser',
    password: 'Saint-14-2',
    database: 'classicmodels'
});
var rows = connection.query('SELECT * FROM customers')[0];
console.log(rows);
// closes the connection when finished
//connection.close();
