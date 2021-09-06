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



app.get('/', async(req, res)=> {
    var names = []
    const connection = mysql.createConnection(config);
    const sql = `INSERT INTO people(name) values('${random_name()}')`
    connection.query(sql);
    connection.query('SELECT * FROM `people`', (error, results, fields)=> {
        results.map(name => names.push(name.name))
        res.send('<h1>FullCycle!</h1><ul>'+names.join('</ul><ul>')+'</ul>')
    });
    connection.end()
})

app.listen(port, ()=>{
    console.log('Rodando na porta '+port)
});