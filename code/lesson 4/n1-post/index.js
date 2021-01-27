const express = require('express')
const bodyParser = require('body-parser')
const app = express()


const port = 3000

app.use(bodyParser.json())

app.get('/', function(req, res) {
    console.log(req)
    res.send('hello')
})


app.post('/subscribe', function(req, res) {
    const name = req.body.name;
    const email = req.body.email;
    res.send(`Hi ${name} thank you for subscribing to our newsletter with your email '${email}'.`)
})

app.listen(port, function() {
    console.log(`listening on ${port}`)
})