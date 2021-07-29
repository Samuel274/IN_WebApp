
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

con.query('INSERT INTO webapp_user (username, email, password) VALUES ("testi", "testo@web.de", "teste123")',(request,response)=>{
    console.log(response)
})

con.query('SELECT * FROM webapp_user',(request,response)=>{
    console.log(response)
})
