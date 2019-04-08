const express = require("express")
const bodyParser = require("body-parser")
const app = express()
const cors = require("cors")
const port = process.env.PORT || 3000

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

require("./routes/users.route")(app)

app.listen(port, () => {
    console.log("Listening")
})