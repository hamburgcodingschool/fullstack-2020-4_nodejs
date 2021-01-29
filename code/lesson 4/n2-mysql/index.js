const mysql = require('mysql2')

console.log('it works')

const connection = mysql.createConnection({
    host: 'localhost',
    // port: 3306,
    user: 'root',
    password: '12345678',
    database: 'newsletter_db'
})

connection.query('SELECT * FROM subscribers', function(err, results) {
    if (err) {
        console.log('there was an error')
        console.log(err)
        return
    }

    console.log(results)
})

console.log(`don't stop... gotta keep doing... don't wait`)