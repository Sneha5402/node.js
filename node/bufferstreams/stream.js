// const fs=require('fs');
// const http=require('http');

// const server = http.createServer();

// server.on('request',(req,res)=>{
//     // fs.readFile('text.txt',function(err,data){
//     //     if (err) return console.error(err);
//     //     res.end(data.toString());
//     // });
//     const rstream=fs.createReadStream('text.txt');
//     rstream.on('data',(chunckdata)=>{
//         res.write(chunckdata);
//     });
//     rstream.on('end',()=>{
//         res.end();
//     });
//     rstream.on('error',(err)=>{
//         console.log(err);
//         res.end("file not found")
//     });
   
// });

// server.listen(8000,'127.0.0.1');

const fs = require('fs');
const http = require('http');

const server = http.createServer();

server.on('request', (req, res) => {
    const rstream = fs.createReadStream('text.txt');

    // Buffer to store the data
    let buffer = Buffer.alloc(0);

    rstream.on('data', (chunk) => {
        buffer = Buffer.concat([buffer, chunk]);
    });

    rstream.on('end', () => {
        res.write(buffer);
        res.end();
    });

    rstream.on('error', (err) => {
        console.log(err);
        res.end("File not found");
    });
});

server.listen(8000, '127.0.0.1', () => {
    console.log('Server is listening on port 8000');
});
