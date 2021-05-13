
const { response } = require('express');
var mysql = require('mysql')
var con = mysql.createConnection({
    host: '62.171.138.202',
    user: 'root',
    password: 'mysqlpassword',
    database: 'inprojekt'
});

con.connect((error)=>{
    if(error) throw error;
    console.log('Connected to DB');
})

con.query('SELECT user FROM mysql.user',(request,response)=>{
    console.log(response)
})