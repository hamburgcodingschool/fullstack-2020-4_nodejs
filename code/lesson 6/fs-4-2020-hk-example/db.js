const mysql = require('mysql2')
require('dotenv').config()

const pool = mysql.createPool({
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    user: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: 'nqtljr30rwxcdof1'
})

function getAllPeople(callback) {

    pool.query('SELECT * FROM people', function (err, result) {

        if (err) {
            callback({
                status: "error",
                description: "Database Error!"
            })
            return
        }
        callback({
            status: "ok",
            description: "Everything is fine...",
            data: result
        })

    })
}

module.exports = {
    getAllPeople
}