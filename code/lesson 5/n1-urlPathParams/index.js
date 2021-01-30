const express = require('express')
const mysql = require('mysql2')

const app = express()

const port = 3000

const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: '12345678',
    database: 'newsletter_db'
})

app.get('/', function(req, res) {
    res.send('hello')
})

app.get('/name/:name', function(req, res) {
    console.log(req.params)
    res.send('hello')
})

app.get('/emails/:id', function(req, res) {
    
    const id = req.params.id
    console.log(id)

    const query = `SELECT * FROM subscribers WHERE id = ?`

    pool.query(query, id, function(err, result) {
        if (err) {
            res.json({
                status: "NOT OK",
                description: "🤷‍♀️",
            })
            return
        }
        res.json({
            status: "OK",
            description: result
        })
    })

})

app.listen(port, function() {
    console.log(`listening on ${port}`)
})