let express = require('express')
let exphbs = require('express-handlebars')
let Handlebars = require('handlebars')
let utf8 = require('utf8')
let app = express()
let port = 3000
app.engine('handlebars', exphbs({
    defaultLayout: 'main'
}))
app.set('view engine', 'handlebars')
app.get('/pw', function (req, res) {
    res.render('home', {
        title: 'UM', message:
            utf8.encode('Bem-vindos, estamos na Aula de PW'),
        message2: req.param('msg')
    })
})
app.listen(port)