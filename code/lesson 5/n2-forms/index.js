const express = require('express')
const app = express()

const port = 3000

// set EJS as default view rendered
app.set('view engine', 'ejs')

// make the contents of the public folder directly accessible to requests
// without having to create express `routes` for each of them
app.use(express.static(__dirname + '/public'))

// json body parser for POST requests
app.use(express.json())

app.get('/', function(req, res) {
    res.render('index')
})

app.post('/postTest', function(req, res) {
    console.log(req.body)
    res.send('thanks for the post...')
})

app.listen(port, function() {
    console.log(`listening on ${port}`)
})