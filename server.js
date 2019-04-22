'use strict';

const express = require('express');
const cors = require('cors');
const app = express();
const Thirder = require('./stringSamples')

app.use(express.json());
app.use(
    cors({
        origin: ['http://localhost:8080']
    })
);

app.use(express.static('public'));

app.post('/test', (req, res) => {
    const strToThird = Thirder.iterativeOne(req.body.string_to_cut);
    res.json({
        return_string: strToThird
    });
});
    
app.listen(process.env.PORT || 8080, () => {
    console.log(`Your app is listening on port ${process.env.PORT || 8080}`);
});
