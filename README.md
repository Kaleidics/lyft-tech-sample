# Lyft Technical Sample

This is a technical sample for the Lyft Apprenticeship.

A clientside web application is deployed [Here](https://lyft-technical-sample.herokuapp.com/) with the test route. It is a form that takes a single string input and returns the cut string. It is hosted on a free account on Heroku, so expect 30 seconds to a minute for the application to wake from sleep.

CORS is only enabled for the origin https://lyft-technical-sample.herokuapp.com/ <br>
So you will not be able to test the route from any other origin(http).

You can still test easily by using Postman.
1. Select the POST method
2. Use the url https://lyft-technical-sample.herokuapp.com/test
3. Select the Body and the following options: raw, JSON (application/json)
4. Provide JSON in the body of the request like so
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
