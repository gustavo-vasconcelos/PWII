window.onload = async () => {
    let users = document.getElementById("users")
    console.log(await getUsers());


    async function getUsers() {
        try {
            const response = await axios.get("localhost:3000/users")
            return response.data
        } catch (err) {
            console.log(err)
        }
    }
}

