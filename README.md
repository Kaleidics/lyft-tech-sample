# Lyft Technical Sample

This is a technical sample for the Lyft Apprenticeship.

A clientside web application is deployed [Here](https://lyft-technical-sample.herokuapp.com/) and makes a POST request to the test route on my backend. <br>It is a form that takes a single string input and returns a new string containing every 3rd letter of the original string.<br>It is hosted on a free account on Heroku, so expect 30 seconds to a minute for the application to wake from sleep.

CORS is only enabled for the origin https://lyft-technical-sample.herokuapp.com/ <br>
So you will not be able to test the route from any other origin(http).

You can still test easily by using Postman.
1. Select the POST method
2. Use the url https://lyft-technical-sample.herokuapp.com/test
3. Select the Body and the following options: raw, JSON (application/json)
4. Provide JSON in the body of the request where the key must be the string "string_to_cut" and its value may be any string
```
{
    "string_to_cut": "iamyourlyftdriver"
}
```

<div align="center">
  <img src="https://i.imgur.com/52sFtcX.png" width="800px" height="600px">
</div>

# Technology
 - Node.js 
 - Express.js
 - Mocha.js, Chai.js
 - HTML, CSS, JavaScript
 - Heroku hosting
