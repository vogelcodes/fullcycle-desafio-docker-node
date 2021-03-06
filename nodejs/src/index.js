const express = require('express');
const mysql = require('mysql');
const random_name = require('node-random-name');

const app = express();
const port = 3000;

const config = {
    host: 'db',
    user: 'node',
    password: 'node',
    database: 'nodedb'
};
const connection = mysql.createConnection(config);
    const sql = 'CREATE TABLE IF NOT EXISTS people (id int not null auto_increment, name varchar(255), primary key (id))'
    connection.query(sql);
    connection.end()


app.get('/', async(req, res)=> {
    var names = []
    const connection = mysql.createConnection(config);
    const sql = `INSERT INTO people(name) values('${random_name()}')`
    connection.query(sql);
    connection.query('SELECT * FROM `people`', (error, results, fields)=> {
        results.map(name => names.push(name.name))
        res.send('<h1>Full Cycle Rocks!</h1><ul><li>'+names.join('</li><li>')+'</li></ul>')
    });
    connection.end()
})

app.listen(port, ()=>{
    console.log('Rodando na porta '+port)
});