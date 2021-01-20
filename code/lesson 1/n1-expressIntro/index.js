const express = require('express');

const app = express();

const port = 3000;

app.get('/', function(req, res) {
    console.log('A request was made to the homepage.');

    res.send('Hello!!!!!');
});

app.get('/about', function(req, res) {
    // console.log(req.query.name);

    // res.send('ABOUT PAGE...');

    const name = req.query.name;
    if (name) {
        res.send(`Hello ${name} welcome to the about page!`);
    } else {
        res.send(`I don't know you...`);
    }
});

app.listen(port, function() {
    console.log(`Server running and listening on port ${port}`);
});
