/**
 * server.js file: the entry point for this project. Manner of calling defined
 *  in package.json under scripts. Imports all routes and manages connection to
 *  views. 
 */

const express = require('express')
const path = require('path');

const WritingController = require('./controllers/writing_controllers');

const app = express()
const PORT = 3001

app.get("/api", (req, res) => {
    res.json({ "sampleList" : ["Hello from server!", "item2", "item3"] });
});

/********* ROUTING *********/

// Use routes
app.use('/writing', WritingController);

// set the initial entry point
app.get('/', (req, res) => {
    res.send("TEMPPPPPP");
});

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`)
});

