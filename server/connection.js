const mysql = require('mysql')
const con = mysql.createConnection({
    host: "127.0.0.1",
    user: "root",
    password: "nauhouse",
    database: "mydb",
})

con.connect(err => {
    if (err) {
        console.log(err)
    } else {
        console.log("connected")
    }
})

module.exports = con