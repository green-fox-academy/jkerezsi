'use strict';

const express = require('express');
const path = require('path');
let mysql = require('mysql');
const app = express();
const PORT = 3001;


app.use(express.static('../static'));
app.use(express.json());


let conn = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'password',
    database: 'reddit'
});

conn.connect(function (err) {
    if (err) {
        console.log('Error connecting.....do something!!!!');
        return;
    }
    console.log('F*** yeah, Connection established');
});

app.get('/hello', (req, res) => {
    res.send("Hello World");
});


app.get('/posts', (req, res) => {
    conn.query('SELECT * FROM myreddit;', function (err, rows) {
        if (err) {
            console.log(err.toString());
            res.status(500).send('Database error');
            return;
        }
        res.send(rows);
    })
});


app.post('/posts', (req,res) => {
    let title = req.body.title
    let url = req.body.url
    conn.query(`INSERT INTO myreddit (title,url) VALUES ("${title}","${url}");`, function (err,rows) {
    if (err) {
        console.log(err.toString());
        res.status(500).send('Database error');
        return;
    }
    res.send(rows);
})
});

app.put('/posts/:id/upvote', (req,res) => {
    let id = req.params.id
    conn.query(`UPDATE myreddit SET score = score+1 WHERE id = ${id};`, function (err,rows) {
    if (err) {
        console.log(err.toString());
        res.status(500).send('Database error');
        return;
    }
    res.send(rows);
})
});

app.put('/posts/:id/downvote', (req,res) => {
    let id = req.params.id
    conn.query(`UPDATE myreddit SET score = score-1 WHERE id = ${id};`, function (err,rows) {
    if (err) {
        console.log(err.toString());
        res.status(500).send('Database error');
        return;
    }
    res.send(rows);
})
});

app.delete('/posts/:id', (req,res) => {
    let id = req.params.id
    conn.query(`DELETE FROM myreddit WHERE id = ${id};`, function (err,rows) {
    if (err) {
        console.log(err.toString());
        res.status(500).send('We were not able to delete from database. Error occured!');
        return;
    }
    res.send(rows);
})
});

app.put('/posts/:id', (req,res) => {
    let id = req.params.id
    let title = req.body.title
    let url = req.body.url
    conn.query(`UPDATE myreddit SET title = "${title}", url = "${url}" WHERE id = ${id};`, function (err,rows) {
    if (err) {
        console.log(err.toString());
        res.status(500).send('Database error');
        return;
    }
    res.send(rows);
})
});

app.listen(PORT, () => {
    console.log(`The server is up and running on ${PORT}`);
});
