// Setup empty JS object to act as endpoint for all routes
projectData = {};

// Require Express to run server and routes
const express = require("express");

// Start up an instance of app
const app = express();

/* Middleware*/
const bodyParser = require("body-parser");

//Here we are configuring express to use body-parser as middle-ware.
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Cors for cross origin allowance
const cors = require("cors");
app.use(cors());

// Initialize the main project folder
app.use(express.static("website"));

// Setup Server
const port = 8000;
const server = app.listen(port, listening);
function listening() {
  console.log(`your server running local on ${port}`);
}

//get route
app.get("/all", sendData);
function sendData(req, res) {
  res.send(projectData);

  // console.log(projectData);
}

//post route
app.post("/add", addData);
function addData(req, res) {
  //console.log(req.body);
  newEntry = {};
  newEntry.date = req.body.date;
  newEntry.temp = req.body.temp;
  newEntry.content = req.body.content;

  projectData = newEntry;
  res.send(projectData);
  console.log("Received data. New entry: ", newEntry);
}
