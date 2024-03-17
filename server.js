// Import the Express.js library
var express = require("express")

// Create an instance of the Express application
var app = express()

// Set the port number on which the server will listen
// First, try to read the port from environment variables
// If the environment variable is not set, use port 3000
var port = process.env.port || 3000;

// Start the server and make it listen for incoming requests on the specified port
// The callback function logs a message to the console once the server starts listening
app.listen(port, () => {
  console.log("App listening to: " + port)
})