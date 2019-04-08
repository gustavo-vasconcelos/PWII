const con = require("../database/connection")
const table = "Users"

function read(req, res) {
    con.query(`SELECT * FROM ${table}`, (err, rows, fields) => {
        if (err) {
            return res.send({ "error": err })
        }
        return res.send(rows)
    })
}

module.exports = { read }