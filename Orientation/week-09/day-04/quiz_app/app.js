'use strict';

require('dotenv').config()
const express = require('express');
const path = require('path');
let mysql = require('mysql');
const app = express();
const PORT = 3007;

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

app.get('/game', (req, res) => {
    res.sendFile(__dirname + '/public/index.html');
});

app.get('/questions', (req, res) => {
    res.sendFile(__dirname + '/public/manage.html');
});

app.get('/api/game', (req, res) => {
    let randomId = Math.floor(Math.random() * 10);
    conn.query(`SELECT * FROM answers LEFT JOIN questions ON answers.question_id = questions.id WHERE questions.id = ${randomId};`,
        function (err, rows) {
            if (err) {
                console.log(err.toString());
                res.status(500).send('Database error');
                return;
            }
            res.send(rows);
        })
});

app.get('/api/questions', (req, res) => {
    conn.query(`SELECT id,question FROM questions;`,
        function (err, rows) {
            if (err) {
                console.log(err.toString());
                res.status(500).send('Database error');
                return;
            }
            res.send(rows);
        })
});

app.post('/api/questions', (req, res) => {
    let question = req.body.question
    let answer_1 = req.body.answers.answer_1
    let ans_1_isCorrect = req.body.answers[0].is_correct

    let answer_2 = req.body.answers.answer_2
    let ans_2_isCorrect = req.body.answers[1].is_correct

    let answer_3 = req.body.answers.answer_3
    let ans_3_isCorrect = req.body.answers[2].is_correct

    let answer_4 = req.body.answers.answer_4
    let ans_4_isCorrect = req.body.answers[3].is_correct

    conn.query(`INSERT INTO questions(question) VALUES('${question}')`,
        function (err, rows) {
            if (err) {
                console.log(err.toString());
                res.status(500).send('Database error');
                return;
            }
        })
    conn.query(`SELECT id FROM questions WHERE question = '${question}';`, function (err, rows) {
        if (err) {
            console.log(err.toString());
            res.status(500).send('Database error');
            return;
        }

        conn.query(`INSERT INTO answers (question_id,answer,is_correct) VALUES(${rows[0].id},'${answer_1}',${ans_1_isCorrect}),
    ('${rows[0].id},'${answer_2}',${ans_2_isCorrect}),
    ('${rows[0].id},'${answer_3}',${ans_3_isCorrect}),
    ('${rows[0].id},'${answer_4}',${ans_4_isCorrect});)`,
            function (err, rows) {
                if (err) {
                    console.log(err.toString());
                    res.status(500).send('Database error');
                    return;
                }
            }
)
})
});

app.delete('/api/questions/:id', (req, res) => {
    let deleteId = req.params.id
    if (deleteId !== "" || deleteId !== null) {
        conn.query(`DELETE FROM answers WHERE question_id = ${deleteId};`,
            function (err, rows) {
                if (err) {
                    console.log(err.toString());
                    res.status(500).send('Database error');
                    return;
                }
            });
        conn.query(`DELETE FROM questions WHERE id = ${deleteId};`,
            function (err, rows) {
                if (err) {
                    console.log(err.toString());
                    res.status(500).send('Database error');
                    return;
                }
            })
    } else {
        res.status(500).send('Database error');
    }
});


app.listen(PORT, () => {
    console.log(`The server is up and running on ${PORT}`);
});
