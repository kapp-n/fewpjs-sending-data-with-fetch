const body = document.querySelector('body')


function submitData(userName, userEmail){
    const formData = {
        name: userName, 
        email: userEmail
    }
    const postObj = { 
        method: 'POST',
        headers: {
                'Content-type': 'application/json',
                'Accept': 'application/json'
            },
        body: JSON.stringify(formData)  
    }
     return fetch('http://localhost:3000/users', postObj)
    .then(response => response.json())
    .then(data =>
        document.body.innerHTML = data['id'])
    .catch((error) => {
        document.body.innerHTML = error.message
        
    })
}

      
