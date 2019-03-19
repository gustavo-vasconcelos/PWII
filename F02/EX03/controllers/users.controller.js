const connectL = require("./../connect.js")

function save(req, resp) {
    let path = __dirname.replace("controllers", "")
    connectL.con.query(`INSERT INTO Users (nome, email, password) VALUES ("${req.body.registoInputNome}", "${req.body.registoInputEmail}", "${req.body.registoInputPassword}")`, (err, result) => {
        if(err) throw err
    })
    //resp.sendFile(path + "index.html")
    resp.redirect("/")
}

function get(req, resp) {
    connectL.con.query("SELECT * FROM Users", (err, rows, fields) => {
        resp.send(rows)
    })
}


module.exports = {
    save,
    get
}