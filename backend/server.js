const express = require ('express');
const mysql = require ('mysql')
const cors = require('cors')

const app = express()
app.use(cors())

const db =mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "db_mahasiswa"
})

app.get('/', (re, res)=> {
    return res.json( "From Backend Side" );
})

app.get('/tb_mahasiswa', (req, res)=> {
    const sql = "SELECT * FROM tb_mahasiswa";
    db.query(sql, (err, data)=> {
        if(err) return res.json(err);
        return res.json(data);
    })
})

app.listen(8801, ()=> {
    console.log("listening");
})