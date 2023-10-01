// TODO: 1/ Implement server
// Variable and constants
const http = require('http');
const port = 5050;
const handlers = require('./handlers');

// Creation of server and making the server to listen to port
const server = http.createServer((req, res) => {
   for (let handler of handlers) {
    if (!handler) {
        break;
    }
   }
});
server.listen(port);


