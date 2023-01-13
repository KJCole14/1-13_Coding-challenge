//needed to install type definitions for node "npm i --save-dev @types/node"           
//   vvv
var MySQL = require('mysql');
var connection = MySQL.createConnection({
    host: '127.0.0.1',
    user: 'devuser',
    password: 'Saint-14-2',
    database: 'classicmodels'
});
//C
//var C = connection.query('CREATE TABLE Test (id INT NOT NULL PRIMARY KEY AUTO_INCREMENT, Message VARCHAR(100))')[0];
//console.log(C);
// R
var R = connection.query('SELECT * FROM Test')[0];
console.log(R);
// U
var U = connection.query("INSERT INTO Test(message) VALUE('Hello there!')")[0];
console.log(U);
//D
var D = connection.query('DROP TABLE Test');
console.log(D);
// closes the connection when finished
//connection.close();
