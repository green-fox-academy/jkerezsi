'use strict';

const express = require('express');
const path = require('path');

const app = express();
const PORT = 8080;

app.use(express.static('assets'));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.get('/doubling', (req, res) => {
  let input = req.query.input;
  let object = {
    "received": Number(input),
    "result": input * 2
  }
  if (isNaN(input)){
    res.send({"error":"Please provide an input!"});
  } else {
    res.send(object);
  }
});

app.get('/greeter', (req, res) => {
  let name = req.query.name;
  let title = req.query.title;
  let greetObject = {
    "received": name + title,
    "welcome_message": `Oh, hi there ${name}, my dear ${title}!`
  } 
  if (name === undefined && title === undefined){
    res.send({"error":"Please provide a name and a title!"})
  } else if (name === "undefined" || name === null || name === ""){
    res.send({"error":"Please provide a name!"})
  } else if (title === "undefined" || title === null || title === ""){
    res.send({"error":"Please provide a title!"})
  } else {
  res.send(greetObject)}
});


app.get('/appenda/:appendable', (req,res) => {
  let appendable = req.params.appendable
  let object = {
    "appended": appendable + "a"
  }
  res.send(object)
});


app.listen(PORT, () => {
  console.log(`The server is up and running on ${PORT}`);
});