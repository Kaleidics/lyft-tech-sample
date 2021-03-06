'use strict';

const express = require('express');
const cors = require('cors');
const app = express();
const Thirder = require('./stringSamples')

//enable cors
app.use(express.json());
app.use(
    cors({
        origin: ['https://lyft-technical-sample.herokuapp.com/']
    })
);

//serve client files
app.use(express.static('public'));

//The route in question
app.post('/test', (req, res) => {
    if (req.body.string_to_cut.length < 3) {
        res.json({
            return_string: "did not have enough characters to show. Please enter at least 3 characters."
        })
    }
    else {
        const strToThird = Thirder.iterativeOne(req.body.string_to_cut);
        res.json({
            return_string: strToThird
        });
    }
    
});
    
app.listen(process.env.PORT || 8080, () => {
    console.log(`Your app is listening on port ${process.env.PORT || 8080}`);
});
