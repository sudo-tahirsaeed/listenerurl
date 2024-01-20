const express = require("express");
const bodyParser = require("body-parser");

const app = express();
const port = 3000;

// Use body-parser middleware to parse incoming JSON requests
app.use(bodyParser.json());

// Handle POST requests to /listenerserver
app.post("/listenerserver", (req, res) => {
  console.log("Received POST request with body:", req.body);
  res.send("Request received successfully!");
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
