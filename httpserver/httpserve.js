var http = require('http');
//create a server object:
http.createServer(function (req, res) {
//res.writeHead(200,{"content-Type":"text/plain"})
res.write('Hello World!');  //----------------------//write a response to the client
res.end(); //end the response
}).listen(9000);   //------------------------the server object listens on port 8080

console.log('server is running on this post number 9000')