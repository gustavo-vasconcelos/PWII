let express = require('express')
let app = express()

app.get('/', (req, resp) => {
    resp.send('Welcome to Express!')
})

app.get('/customer/:id', (req, res) => {
    res.send('Customer requested is ' + req.params['id'])
})

app.listen(3000)

console.log("Listening")