const express = require('express')
const path = require('path')

const app = express()

const port = 3000

app.get('/', function(req, res) {
    
    // const name = 'Joe'
    // const linkURL = 'https://google.com'
    // const linkText = 'I dunno... Ask Google!'

    const absoluteFilePath = __dirname + '/public/index.html';

    console.log('------')
    console.log(absoluteFilePath)
    console.log('------')

    res.sendFile(absoluteFilePath)
    
})

app.get('/about', function(req, res) {
    
    res.send(`this is the about page`)
    
})

app.get('/image', function(req, res) {

    res.sendFile(path.join(__dirname, 'public/homer.png'))
})


app.listen(port, function() {
    console.log(`Listenion on ${port}`)
})