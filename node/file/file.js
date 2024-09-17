var http = require('http');
var fs = require('fs');

http.createServer(function(req, res) {
    fs.readFile('demo.html', function(err, data) {
        if (err) throw err;
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.write(data);
        res.end();
    });
}).listen(2000);

console.log('Server is running on http://localhost:2000');
