const express = require('express')
const app = express()
const bodyParser = require("body-parser")
const userController = require("./controllers/users.controller.js")


app.use(bodyParser.urlencoded({ extended: true }))

app.get('/', (req, resp) => {
    resp.sendFile(__dirname + "/index.html")
})

app.use("/img", express.static(__dirname + "/img"))
app.use("/js", express.static(__dirname + "/js"))
app.use("/css", express.static(__dirname + "/css"))

app.post("/registo", userController.save)

app.get("/api/users", userController.get)

app.listen(3000)

console.log("Listening")