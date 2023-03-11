const {Client} = require('pg')

const client = new Client({
    host : "capstone-db.cpnp07z8toc2.us-east-2.rds.amazonaws.com",
    port : 5432,
    user : "F4_F2023",
    password : "F4rcoders!",
    database : "intial_db"
})

module.exports = client;