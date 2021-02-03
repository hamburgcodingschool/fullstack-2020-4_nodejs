const express = require('express')
const app = express()

const port = process.env.PORT || 3000

app.set('view engine', 'ejs')

const pool = mysql.createPool({
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    user: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: 'nqtljr30rwxcdof1'
})

app.get('/people', function (req, res) {

    pool.query('SELECT * FROM people', function (err, result) {

        if (err) {
            res.send('Error loading page...')
            return
        }
        res.render('index', {
            viewData: result
        })
    })
})


app.listen(port, function () {
    console.log(`Listening on ${port}`)
})