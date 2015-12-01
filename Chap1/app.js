/// <reference path="./typings/tsd.d.ts" />
/*
import express = require ('express');

var app = express();

app.get("/", (request : express.Request, response: express.Response) => {
  response.send("Hello world!");
});
app.get("/home",function(request: express.Request, res: express.Response){
  res.send("This is home page//")
});
app.get("/home/pizza",function(request: express.Request, res: express.Response){
  res.send("This is pizza page//")
});
app.listen(3);
  console.log("Express app started on port 3.");*/
/*
var http = require("http");
function requestHandler(request, response) {
console.log("In comes a request to: " + request.url);
response.end("Hello, world!");
}
var server = http.createServer(requestHandler);
server.listen(30); */
// curl -k https://localhost:8000/
var https = require('https');
https.createServer(function (req, res) {
    res.writeHead(200);
    res.end("hello world\n");
}).listen(8000);
