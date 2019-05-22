'use strict';

const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

const app = express();
const PORT = 8088;

app.use(bodyParser.json());

app.use(
  bodyParser.urlencoded({
    extended: true
  })
);

app.post('/arrays', (req, res) => {
    let resultObject = {};
    let what = req.body.what;
    let numbers = req.body.numbers;
    let total = 0;
    let total1 = 1;
    let total2 = [];


    if (what === "sum"){
        for (let i = 0; i < numbers.length; i++){
            total = total + numbers[i];
            resultObject.result = total;
        }
        res.send(resultObject);
    }
    else if (what === "multiply"){
        for (let i = 0; i < numbers.length; i++){
            total1 = total1 * numbers[i];
            resultObject.result = total1;
        }
        res.send(resultObject);
    }
    else if (what === "double"){
        for (let i = 0; i < numbers.length; i++){
            total2.push(numbers[i] *2);
            resultObject.result = total2;
        }
        res.send(resultObject);
    } 
    else if (what === undefined || numbers === undefined || what === null || what === "") {
        res.send({
          "error": "Please provide what to do with the numbers!"
        })
      }
});




app.listen(PORT, () => {
  console.log(`The server is up and running on ${PORT}`);
});

