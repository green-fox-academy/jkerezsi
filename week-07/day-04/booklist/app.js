'use strict';

const express = require('express');
const path = require('path');
let mysql = require('mysql');


const app = express();
const PORT = 8080;

app.use(express.static('../booklist'));

let conn = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'password',
  database: 'bookinfo'
});

conn.connect(function (err) {
  if (err) {
    console.log('Error connecting to booklist DB');
    return;
  }
  console.log('Connection established');
});

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
 });

app.get('/titles', (req, res) => {
  conn.query('SELECT book_name FROM book_mast;', function (err, rows) {
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

