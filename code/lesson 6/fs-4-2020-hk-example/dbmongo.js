const mongo = require('mongodb')
require('dotenv').config()

const url = process.env.MONGO_URL

let connection
mongo.MongoClient.connect(url, function (err, client) {
    if (err) {
        console.log(err)
    } else {
        connection = client
    }
})

function getMoviesFromYear(year, callback) {

    const db = connection.db('sample_mflix')
    const movies = db.collection('movies')

    movies.find({
        year: year
    }).toArray(function (err, docs) {
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
            data: docs
        })
    })
}

module.exports = {
    getMoviesFromYear
}