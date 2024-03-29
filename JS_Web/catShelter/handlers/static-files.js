const url = require('url');

function getContentType(url) {
    if (url.endsWith('.css')) {
        return 'text/css';
    } else if (url.endsWith('.js')) {
        return 'text/js';
    } else if (url.endsWith('.html')) {
        return 'text.html'
    } else if (url.endsWith('.png')) {
        return 'text/png';
    }
}

module.exports = (req, res) => {
    const pathname = url.parse(req.url).pathname
    if (pathname.startsWith('/content') && req.method === 'GET') {
        fs.readFile(pathname, 'utf8', (err, data) => {
            if (err) {
                console.log(err);
                res.writeHead(404, { 'Content-Type': 'text/plain' });
                res.end('404 - Not Found');
            }
            res.writeHead(200, { 'Content-Type': getContentType(pathname) });
            res.write(data)
            res.end();
        })
    } else {
        return true;
    }
}