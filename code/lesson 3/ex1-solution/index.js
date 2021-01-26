const cats = require('./public/api/cats.json')
const dogs = require('./public/api/dogs.json')
const express = require('express')

const app = express()
const port = 3000

app.set('view engine', 'ejs')
app.use(express.static(__dirname + '/public'))

app.get('/', function(req, res) {
    res.render('index')
})

app.get('/about', function(req, res) {
    res.render('about')
})

app.get('/gallery', function(req, res) {

    const viewData = {
        type: 'cats',
        dogs: dogs
    }
    
    res.render('gallery', {
        type: 'cats',
        images: cats
    })
})

app.listen(port, function() {
    console.log(`listening on ${port}`)
})