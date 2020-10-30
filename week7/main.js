const apichuck = document.getElementById('chuck');

const apiron = document.getElementById('ron');

const outputDiv = document.getElementById('quoteoutput');

const chuckURL = 'https://api.chucknorris.io/jokes/random';

const ronURL = 'https://ron-swanson-quotes.herokuapp.com/v2/quotes'



apichuck.addEventListener('click', () => {
    fetch(chuckURL)
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

apiron.addEventListener('click', () => {
    fetch(ronURL)
    .then( response => {
        outputDiv.innerHTML = 'Waiting for response...';
        if (response.ok) {
            return response;
        }
        throw Error(response.statusText);
    })
    .then( response => response.json() )
    .then( data => outputDiv.innerHTML = `"${data[0]}"` )
    .catch (error => console.log ('There was an error:', error))
}, false);