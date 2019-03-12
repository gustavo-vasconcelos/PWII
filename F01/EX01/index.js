const http = require("http")
const url = require("url")

const server = http.createServer((request, response) => {
    response.writeHead(200, { "Content-Type": "text/plain" })
    let queryData = url.parse(request.url, true).query
    if (queryData.name) {
        response.end("Hello " + queryData.name + "\nPosition " + queryData.position + "\nCourse " + queryData.uc)
    }
})

server.listen(3000)
console.log("Serving")