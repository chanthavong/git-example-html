const API = 'http://localhost:4000'

function getValue(id) {
    return document.getElementById(id).value
}

async function handleLogin() {
    const email = getValue('email')
    const password = getValue('password')

    const response = await fetch(`${API}/login`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email, password })
    })

    const data = await response.json()
    console.log(data)
    if(response.status != 200) {
        alert('Email or password is incorrect')
        return
    }
    // save token to local storage and redirect to index.html
    localStorage.setItem('token', data.token)
    window.location.href = 'index.html'

}