const apiButton = document.getElementById('chuck');

const outputDiv = document.getElementById('output');

const apiURL = 'https://api.chucknorris.io/jokes/random';



apiButton.addEventListener('click', () => {
    fetch(apiURL)
    .then( response => {
        outputDiv.innerHTML = 'Waiting for response...';
        if (response.ok) {
            return response;
        }
        throw Error(response.statusText);
    })
    .then( response => response.json() )
    .then( data => outputDiv.innerText = data.value )
    .catch (error => console.log ('There was an error:', error))
}, false);