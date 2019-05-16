const express = require('express');
const app = express();
const PORT = 3000;

// set the view engine to ejs
app.set('view engine', 'ejs');

// database
const todos = [
    {name:'get up'},
    {name:'survive'},
    {name:'go back to bed'},
];

app.get('/', (req, res) => {
    // render `home.ejs`
    res.render('home', {
        list: todos
        });
    });

// start express app on port 3000
app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});