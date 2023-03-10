/* Dependencies */
const express = require('express');
const bodyParser = require('body-parser')
const cors = require('cors');

// Setup empty JS object to act as endpoint for all routes
projectData = {};

// Start up an instance of app
const app = express();

/* Middleware*/
//Here we are configuring express to use body-parser as middle-ware.
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Cors for cross-origin allowance
app.use(cors());

// Initialize the main project folder
app.use(express.static('website'));

// Setup Server
const port = 8000;

function listening() {
    console.log("server is running")
    console.log(`localhost: ${port}`)
}

app.listen(port, listening);

app.get('/projectData', (req, res) => {
    res.send(projectData)
})

app.post('/projectData', (req, res) => {
    projectData.temperature = req.body.temperature
    projectData.date = req.body.date
    projectData.userResponse = req.body.userResponse

    res.sendStatus(200)
})