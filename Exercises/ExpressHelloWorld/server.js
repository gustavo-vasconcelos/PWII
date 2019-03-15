let express = require('express')
let bodyParser = require('body-parser')
let app = express()

app.use(bodyParser.urlencoded({ extended: true }))

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/index.html")
})

app.post('/myaction', function (req, res) {
    res.send('You sent the name "' + req.body.name + '".')
})

app.listen(3000, function () {
    console.log('Serving')
})