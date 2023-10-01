const { URL } = require('url'); // Import the URL class
const fs = require('fs');
const path = require('path');
const cats = require('../data/cats');

// Main logic of the page
module.exports = (req, res) => {
  // Use the URL class to parse the request URL
  const requestUrl = new URL(req.url, 'http://localhost'); // Replace 'http://localhost' with your base URL

  if (requestUrl.pathname === '/' && req.method === 'GET') {
    // Construct the file path to your index.html
    const filePath = path.join(__dirname, '../views/home/index.html');

    // Use fs module to read the index.html file
    fs.readFile(filePath, 'utf8', (err, data) => {
      if (err) {
        // Handle file read error (e.g., file not found)
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end('404 - Not Found');
      } else {
        // Send the HTML as a response with status code 200 and content type "text/html"
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end(data);
      }
    });
  } else {
    // Handle other routes or HTTP methods
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('404 - Not Found');
  }
};
