let express = require("express")
let app = express()
let mustacheExpress = require("mustache-express")
// Register ".html" extension with The Mustache Express
app.engine("html", mustacheExpress())
app.set("view engine", "html")
app.get("/", (req, res) => {
    app.set("views", __dirname + "/views")
    res.render("index.html", {
        name: "Filipe",
        surname: "Portela"
    })
})
console.log("Listening")
app.listen(process.env.PORT || 3000)