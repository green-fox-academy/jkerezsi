'use strict';

require('dotenv').config()
const express = require('express');
const path = require('path');
let mysql = require('mysql');
const app = express();
const PORT = 3001;

app.use(express.static('./public'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

let conn = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_DATABASE
});

conn.connect(function (err) {
    if (err) {
        console.log('Error connecting.....do something!!!!');
        return;
    }
    console.log('F*** yeah, Connection established');
});

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/index.html');
});

app.get('/api/users', (req, res) => {
    conn.query('SELECT emai_address,balance FROM users;', function (err, rows) {
        if (err) {
            console.log(err.toString());
            res.status(500).send('Database error');
            return;
        }
        res.send(rows);
    })
});


app.post('/api/users', (req, res) => {
    let email = req.body.email
    let password = req.body.password
    let coupon = req.body.coupon

    conn.query(`SELECT id, emai_address FROM users WHERE emai_address = '${email}';`, function (err, rows) {
        if (err) {
            console.log(err.toString());
            res.status(500).send('Database error');
            return;
        }
        if (rows.length === 0) {
            if (coupon === "" || coupon === undefined) {
                conn.query(`INSERT INTO users(emai_address,password) VALUES('${email}','${rot13(password)}');`, function (err, rows) {
                    if (err) {
                        res.status(500).send('Database error');
                        return;
                    }
                    res.status(201).send(rows)
                })
            } else if (coupon === "FIRST100" && rows.length < 100) {
                conn.query(`INSERT INTO users(emai_address,password,balance) VALUES('${email}','${rot13(password)}',1000);`, function (err, rows) {
                    if (err) {
                        res.status(500).send('Database error');
                        return;
                    }
                    res.status(201).send(rows)
                })
            }
            else if (coupon !== "FIRST100") {
                res.status(400).send('Invalid coupon code')
            }
        }
        else{
            res.status(202).send("Email already exist")
        }  
    })
    });



    app.listen(PORT, () => {
        console.log(`The server is up and running on ${PORT}`);
    });


    function rot13(str) {
        var input = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
        var output = 'NOPQRSTUVWXYZABCDEFGHIJKLMnopqrstuvwxyzabcdefghijklm';
        var index = x => input.indexOf(x);
        var translate = x => index(x) > -1 ? output[index(x)] : x;
        return str.split('').map(translate).join('');
    }