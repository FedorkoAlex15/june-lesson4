const saveUser = (user) => {
    fetch('https://jsonplaceholder.typicode.com/users', {
        method: 'POST',
        body: JSON.stringify({user}),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
    })
        .then((response) => response.json())
        .then((json) => console.log(json));
}

export {saveUser}