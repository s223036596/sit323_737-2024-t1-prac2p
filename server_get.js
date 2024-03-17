// Import the Express.js library
const express = require("express");
// Import the response object from Express
const res = require("express/lib/response");
// Create an instance of the Express application
const app = express();
// Define a function to add two numbers
const addTwoNumber = (n1, n2) => {
  return n1 + n2;
};
// Define a route to handle the "/addTwoNumber" endpoint
app.get("/addTwoNumber", (req, res) => {
  // Parse the query parameters n1 and n2 as integers
  const n1 = parseInt(req.query.n1);
  const n2 = parseInt(req.query.n2);
  // Call the addTwoNumber function with the parsed n1 and n2
  const result = addTwoNumber(n1, n2);
  // Send the result as a JSON response
  res.json({ statuscocde: 200, data: result });
});
// Call the addTwoNumber function with hardcoded values and log the result
console.log(addTwoNumber(19, 12));
// Set the port number for the server
const port = 3040;
// Start the server and listen on the specified port
app.listen(port, () => {
  // Log a message to the console when the server starts listening
  console.log("hello i'm listening to port " + port);
});