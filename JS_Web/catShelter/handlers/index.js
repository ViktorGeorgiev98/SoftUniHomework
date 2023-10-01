// TODO: handler for home page

const homeHandler = require('./home');
const staticFiles = require('./static-files')
module.exports = [homeHandler, staticFiles];