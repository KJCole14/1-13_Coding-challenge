
//needed to install type definitions for node "npm i --save-dev @types/node"           
           //   vvv
const MySQL = require('mysql');

const connection = MySQL.createConnection({
    host: '127.0.0.1',
    user: 'devuser',
    password: 'Saint-14-2',
    database: 'classicmodels'
});
//C
const [C] = connection.query('CREATE TABLE Test (id INT NOT NULL PRIMARY KEY AUTO_INCREMENT, Message VARCHAR(100))');
console.log(C);

// R
const [R] =  connection.query('SELECT * FROM Test');
console.log(R);

// U
const [U] =  connection.query("INSERT INTO Test(message) VALUE('Hello there!')");
console.log(U);

//D
var D = connection.query('DROP TABLE Test');
console.log(D);
// closes the connection when finished
//connection.close();
