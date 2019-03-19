const express = require('express')
const app = express()

app.get('/', (req, resp) => {
    resp.sendFile(__dirname + "/index.html")
})

app.use("/assets", express.static(__dirname + "/assets"))

app.listen(3000)

console.log("Listening")