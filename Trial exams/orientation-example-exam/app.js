'use strict';

require('dotenv').config()
const express = require('express');
const path = require('path');
let mysql = require('mysql');
const app = express();
const PORT = 3005;

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
    res.sendFile(__dirname + './index.html');
});

app.get('/api/links', (req, res) => {
    conn.query(`SELECT id,url,alias,hitCount FROM url;`,
        function (err, rows) {
            if (err) {
                console.log(err.toString());
                res.status(500).send('Could not retrieve url database');
                return;
            }
            res.send(rows);
        });
});

app.get('/a/:alias', (req, res) => {
    let alias = req.params.alias
    conn.query(`SELECT * FROM url WHERE alias = '${alias}';`,
        function (err, rows) {
            if (err) {
                console.log(err.toString());
                res.status(400).send(err.message);
                return;
            }
            if (rows.length !== 0) {
                conn.query(`UPDATE url SET hitCount = hitCount + 1 WHERE alias = '${alias}';`,
                    function (err, rows) {
                        if (err) {
                            console.log(err.toString());
                            res.status(400).send(err.message);
                            return;
                        }
                        conn.query(`SELECT url FROM url WHERE alias = '${alias}';`,
                            function (err, rows) {
                                if (err) {
                                    console.log(err.toString());
                                    res.status(400).send(err.message);
                                    return;
                                }
                                res.redirect(rows[0].url);
                            });
                    })
            }
        });
});

app.post('/api/links', (req, res) => {
    let url = req.body.url
    let alias = req.body.alias
    conn.query(`SELECT * FROM url WHERE alias = '${alias}';`,
        function (err, rows) {
            if (err) {
                console.log(err.toString());
                res.status(500).send('Database error');
                return;
            }
            if (rows.length > 0) {
                res.status(400).send();
            } else {
                let randomNum = Math.floor(Math.random() * 9999);
                conn.query(`INSERT INTO url(url,alias,hitCount,secretCode) VALUES('${url}','${alias}',0,${randomNum});`,
                    function (err, rows) {
                        if (err) {
                            res.status(500).send(err.message);
                        }
                        conn.query(`SELECT * FROM url WHERE alias = '${alias}';`,
                            function (err, rows) {
                                if (err) {
                                    console.log(err.toString());
                                    res.status(500).send('Database error');
                                    return;
                                }
                                res.send(rows);
                            });
                    })
            }
        });
});

app.delete('/api/links/:id', (req, res) => {
    let id = req.params.id
    let code = req.body.secretCode
    conn.query(`SELECT * FROM url WHERE id = ${id};`,
        function (err, rows) {
            if (err) {
                res.status(500).send("Database error")
                return
            }
            if (rows.length === 0) {
                res.status(404).send("this id does not exist")
            } else if (rows[0].secretCode !== code) {
                res.status(403).send("secret codes do not match")
            } else {
                conn.query(`DELETE FROM url WHERE id = ${id};`)
                res.status(204).send(`ID:${id} is deleted from database`)
            }
        })
});




app.listen(PORT, () => {
    console.log(`The server is up and running on ${PORT}`);
});