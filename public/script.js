'use strict';

let form = document.getElementById('toThirds');
form.addEventListener('submit', (event) =>{
    event.preventDefault();
    const stringToThirds = document.getElementById('stringToCut').value;
    testRoute(stringToThirds);
})

function testRoute(input) {
    const url = 'https://lyft-technical-sample.herokuapp.com/test';

    const body = {
        string_to_cut: input
    }

    fetch(url, {
        method: 'POST',
        body: JSON.stringify(body),
        headers: {
            'Content-Type': 'application/json'
        }
    })
    .then(res => res.json())
    .then(response => {
        const newstr = response.return_string;
        updatedString(newstr);
    })
    .catch(err => alert(err));    
}

function updatedString(input) {
   document.getElementById('newString').innerHTML = `The cut string is: ${input}`;
}