window.onload = () => {
    loadTable()
    let form = document.getElementById("form")
    form.addEventListener("submit", async (e) => {
        e.preventDefault()
        try {
            await axios.post("https://pw2-gustavovasconcelos.c9users.io/users", {
                username: document.getElementById("username").value,
                password: document.getElementById("password").value
            })
            loadTable()
            form.reset()
        } catch (err) {
            console.log(err)
        }
        
    })


}

async function loadTable() {
    document.getElementById("table").innerHTML = `
        <thead>
            <tr>
                <th>ID</th>
                <th>Username</th>
            </tr>
        </thead>
        <tbody>
            ${await getUsers()}
        </tbody>
    `
}

async function getUsers() {
    try {
        const response = await axios.get("https://pw2-gustavovasconcelos.c9users.io/users")
        let str = ""
        response.data.forEach(({ id, username }) => {
            str += `
                <tr>
                    <td>${id}</td>
                    <td>${username}</td>
                </tr>
            `
        })
        return str
    } catch (err) {
        console.log(err)
    }
}