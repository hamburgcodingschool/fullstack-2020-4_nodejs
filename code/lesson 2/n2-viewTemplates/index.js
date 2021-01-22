const express = require('express')
const app = express()

const port = 3000

app.set('view engine', 'ejs')
app.use(express.static(__dirname + '/public'))

app.get('/', function(req, res) {
    
    const viewData = {
        name: 'Helder',
        colors: ['pink', 'blue', 'red', 'yellow']
    }

    res.render('index', viewData)
})



app.listen(port, function() {
    console.log(`listening on ${port}`)
})