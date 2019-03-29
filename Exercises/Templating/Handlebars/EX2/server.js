let http = require('http')
let Handlebars = require('handlebars')
let server = http.createServer((request, response) => {
    if (request.url == "/") {
        let source = `
            <p>Hello, my name is {{ name }}. I am from {{ hometown }}. I am professor of {{ uc.length }} UC:</p>
            <ul>
                {{#uc}}
                    <li>{{ name }} of {{ year }} year</li>
                {{/uc}}
            </ul>
            at {{ um }}`
        let template = Handlebars.compile(source)
        let data = {
            "name": "Filipe",
            "hometown": "Trofa, PRT",
            "uc": [
                { "name": "Web Programming", "year": "2nd" },
                { "name": "ISI", "year": "3rd" }
            ],
            "um": "University of Minho"
        }
        let result = template(data)
        response.end(result)
    }
})
server.listen(3000, () => {
    console.log('Servidor Node.js em execucao')
})