const connectL = require("./connect.js")
const http = require("http")

const server = http.createServer((request, response) => {
    response.writeHead(200, { 'Content-Type': 'text/html' })
    response.write(`
        <html>
            <head>
                <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
            </head>
            <body>
                <div class="jumbotron mt-5 container">
                    <table class="table bordered table-hover">
                        <thead>
                            <tr>
                                <th>ID ALUNO</th>
                                <th>IDADE</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                `)
    connectL.con.query("SELECT * FROM Gustavo", (err, rows, fields) => {
        if (!err) {
            rows.forEach(row => {
                response.write(`
                    <tr>
                        <td>${row.idAluno}</td>
                        <td>${row.idade}</td>
                    </tr>
                `)
            })
            response.write(`
                                </tbody>
                            </table>
                            <form action="/" method="post">
                                <div class="mb-3">
                                    <label for="idAluno">Student number</label>
                                    <input type="number" name="idAluno" id="idAluno" min="9000000" max="9180999" class="form-control" required/>
                                </div>
                                <div class="mb-3">
                                    <label for="idAluno">Age</label>
                                    <input type="number" name="idade" id="idade" min="1" max="99" class="form-control" required/>
                                </div>
                                <input type="submit" class="form-control btn btn-primary"/>
                            </form>
                        </div>
                    </body>
                </html>
            `)

            if (request.method === "POST") {
                let body = ""
                request.on("data", chunk => {
                    body += chunk.toString()
                })
                request.on("end", () => {
                    let values = body.split("&")
                    console.log(values)
                    let idAluno = values[0].replace("idAluno=", "")
                    let idade = values[1].replace("idade=", "")
                    connectL.con.query(`INSERT INTO Gustavo VALUES (${idAluno}, ${idade})`, (err2, result) => {
                        if (err2) {
                            throw err2
                        }
                    })
                })
            }

            response.end()

        } else {
            console.log(err)
        }
    })

})

server.listen(3000)
console.log("Serving")