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

app.use(express.json())

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
app.post('/addSubscriber', function(req, res) {

    const name = req.body.name;
    const email = req.body.email;

    // external inputs should be sanitized

    const query = `INSERT INTO subscribers VALUES(NULL, ?, ?)`
    console.log(query)
    pool.query(query, [name, email],  function(err, result) {
        if (err) {
            console.log(err)
            res.json({
                status: "NOT OK!"
            })
            return
        }
        
        res.json({
            status: "OK",
            description: "1 row inserted successfully",
        })
    })

    // console.log(name);
    // console.log(email);

    
})


app.listen(port, function() {
    console.log(`listening on ${port}`)
})
