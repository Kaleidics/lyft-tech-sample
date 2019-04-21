'use strict';

let form = document.getElementById('toThirds');
form.addEventListener('submit', (event) =>{
    event.preventDefault();
    const stringToThirds = document.getElementsByClassName('stringToCut');
    testRoute(stringToThirds);
})

function testRoute(input) {
    const url = 'https://lyft-technical-sample.herokuapp.com/test';

    fetch(url, {
        method: 'POST',
        body: JSON.stringify(input),
        headers: {
            'Content-Type': 'application/json'
        }
    })
    .then(res => res.json())
    .then(response => {
        const newstr = response.return_string;
        console.log(newstr);
    })
    .catch(err => alert(err));
        
}