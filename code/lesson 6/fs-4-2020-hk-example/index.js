const express = require('express')
const app = express()
const dbmongo = require('./dbmongo')
const db = require('./db')

const port = process.env.PORT || 3000


app.use(express.static(__dirname + '/public'))
app.set('view engine', 'ejs')

app.get('/', function (req, res) {
    db.getMoviesFromYear(2015, function (result) {
        res.json(result)
    })
})

app.get('/movies', function (req, res) {
    dbmongo.getMoviesFromYear(2015, function (result) {
        res.json(result)
    })
})



app.get('/people', function (req, res) {
    db.getAllPeople(function (result) {
        res.render('index', {
            viewData: result
        })
    })
})

app.listen(port, function () {
    console.log(`Listening on ${port}`)
})