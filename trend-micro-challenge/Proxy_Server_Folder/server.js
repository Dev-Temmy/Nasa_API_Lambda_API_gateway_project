const express = require('express');
const cors = require('cors');
const fetch = require('node-fetch');
require('dotenv').config();

const PORT = 5000;
const app = express();

app.use(cors());
const corsOptions = {
    origin: "http://localhost:3000"
};

//const API_KEY= 'pmn28bi0NkYUw1E8kl8jLS7830wC1j0DPEVBNIud';

const requestEndpoint = "https://api.nasa.gov/neo/rest/v1/feed?api_key=pmn28bi0NkYUw1E8kl8jLS7830wC1j0DPEVBNIud";

// This function runs if the http://localhost:5000/getData endpoint
// is requested with a GET request
app.get('/getData', cors(corsOptions), async (req, res) => {
    const fetchOptions = {
        method: 'GET'
    }
    const response = await fetch(requestEndpoint, fetchOptions);
    const jsonResponse = await response.json();
    res.json(jsonResponse);
});

app.listen(PORT, () => {
    console.log(`Example app listening at http://localhost:${PORT}`);
});