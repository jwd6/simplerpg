// Your Javascript Code Goes Here

// Note: The 'starter' folders that appear in this course's downloadable source code is here to give you a starting point to try out coding yourself. The 'finished' folder contains the code as it is when we finish the lecture. You can use the 'finished' folder to compare to your own code, or just examine the finished code.

var http = require('http');

http.createServer(function(req, res){

    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Hello world\n');
    
}).listen(1337, '127.0.0.1');