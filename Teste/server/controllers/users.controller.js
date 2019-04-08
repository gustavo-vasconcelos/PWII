const con = require("../database/connection")
const bcrypt = require("bcrypt")
const table = "Users"

function create(req, res) {
    const username = con.escape(req.body.username)
    const password = con.escape(req.body.password)
    bcrypt.hash(password, 10, (err, hash) => {
        if(!err) {
            con.query(`INSERT INTO ${table} (username, password) VALUES (${username}, "${hash}")`, (queryErr, result) => {
                if(queryErr) {
                    return res.status(400).send({"error": queryErr})
                }
                return res.send()
            })
            
        } else {
            return res.status(400).send({"error": "Could not hash password."})
        }
    })
}

function read(req, res) {
    con.query(`SELECT id, username FROM ${table}`, (err, rows, fields) => {
        if (err) {
            return res.status(400).send({ "error": err })
        }
        return res.send(rows)
    })
}

module.exports = { create, read }