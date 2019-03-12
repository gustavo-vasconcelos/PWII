const http = require("http")
const fs = require("fs")

let paths = []

const server = http.createServer((request, response) => {
    paths.push(request.url.replace("/", ""))
    console.log(paths)
    let desiredPath = paths[paths.length - 1]

    if (desiredPath !== "favicon.ico") {
        if(!desiredPath) {
            desiredPath = "index.html"
        }
        fs.readFile(desiredPath, (err, data) => {
            if (!err) {
                response.writeHead(200, { 'Content-Type': 'text/html' })
                response.write(data)
            } else {
                response.writeHead(404, { 'Content-Type': 'text/html' })
                response.write("Not found!")
            }
            response.end()
        })
    }
})

server.listen(3000)
console.log("Serving")