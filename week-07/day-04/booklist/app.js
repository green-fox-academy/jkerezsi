'use strict';

const express = require('express');
const path = require('path');
let mysql = require('mysql');


const app = express();
const PORT = 8080;

//this needs to have a static home page file posted, actual file will be indicated
//below in app.get section
app.use(express.static('../booklist'));
//if i post then the server is able to read json file
app.use(express.json());

//connection to database booklist
let conn = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'password',
  database: 'bookinfo'
});
//database conection error handling
conn.connect(function (err) {
  if (err) {
    console.log('Error connecting to booklist DB');
    return;
  }
  console.log('Connection established');
});

//get request =>home page
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

app.get('/allbooks', (req, res) => {
  conn.query('SELECT book_mast.book_name, author.aut_name, category.cate_descrip, newpublisher.pub_name, book_mast.book_price FROM book_mast INNER JOIN author ON author.aut_id = book_mast.aut_id INNER JOIN category ON category.cate_id = book_mast.cate_id INNER JOIN newpublisher ON newpublisher.pub_id = book_mast.pub_id;', function (err, rows) {
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

