// Importing Express
const express = require('express');
// Creating an Express application
const app = express();
// Defining the port
const port = 3000;
// Handling GET requests to the root URL
app.get('/', (req, res) => {
    res.send('<h1>Welcome to My Simple Node.js Web Server</h1>');
});
// Starting the server
app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
