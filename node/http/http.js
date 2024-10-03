// var http=require('http');
// http.createServer(function(req,res){
//     res.writeHead(200,{'Content-type':'text/html'});
//     res.write('Welcome');
//     res.write(`<h1> ${req.url} </h1>`);
//     res.end("thank you");
// }).listen(8080);

// GET Method
// var http = require('http');

// http.createServer(function(req, res) {
//     res.writeHead(200, {'Content-Type': 'text/html'}); 
    
//     if (req.method === 'GET') {
//         if (req.url === '/') {
//             res.write('<h1>Welcome to the Home Page</h1>');
//         } else if (req.url === '/about') {
//             res.write('<h1>About Page</h1>');
//         } else if (req.url === '/contact') {
//             res.write('<h1>Contact Page</h1>');
//         } else {
//             res.write('<h1>404 Page Not Found</h1>');
//         }
//         res.write(`<p>You requested: ${req.url}</p>`);
//     } else {
//         res.write('<h1>Only GET requests are supported.</h1>');
//     }
//     res.end("Thank you for visiting");
    
// }).listen(8085, () => {
//     console.log('Server is running on http://localhost:8085');
// });

var http = require('http');

// Create HTTP Server
http.createServer(function(req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'}); 
    
    // Check request method
    if (req.method === 'GET') {
        if (req.url === '/') {
            res.write('<h1>Welcome to the Home Page (GET)</h1>');
        } else if (req.url === '/about') {
            res.write('<h1>About Page (GET)</h1>');
        } else if (req.url === '/contact') {
            res.write('<h1>Contact Page (GET)</h1>');
        } else {
            res.write('<h1>404 Page Not Found (GET)</h1>');
        }
        res.write(`<p>You requested: ${req.url}</p>`);
    } else if (req.method === 'POST') {
        res.write('<h1>POST request received</h1>');
        res.write('<p>Data has been submitted.</p>');
    } else if (req.method === 'PUT') {
        res.write('<h1>PUT request received</h1>');
        res.write('<p>Data has been updated.</p>');
    } else if (req.method === 'DELETE') {
        res.write('<h1>DELETE request received</h1>');
        res.write('<p>Data has been deleted.</p>');
    } else {
        res.write('<h1>Unsupported request method</h1>');
        res.write('<p>Only GET, POST, PUT, DELETE are supported.</p>');
    }

    res.end("Thank you for visiting");
    
}).listen(8085, () => {
    console.log('Server is running on http://localhost:8085');
});



