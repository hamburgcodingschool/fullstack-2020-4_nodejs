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
    
    pool.query('SELECT * FROM subscribers', function(err, result) {
        if (err) {
            console.log(err)
            res.send('THERE WAS AN ERROR!!!! 🙀')
            return
        }

        res.json(result)
    })

})

// HOMEWORK ADD A POST method ENDPOINT
// INSERT THE NEW name AND email IN THE DATABASE



app.listen(port, function() {
    console.log(`listening on ${port}`)
})
