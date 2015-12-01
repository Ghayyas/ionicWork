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
import url = require("url"); 
var parsedURL = url.parse("http://www.example.com/profile?name=barry");
console.log(url.protocol); // "http:"
console.log(parsedURL.host); // "www.example.com"
console.log(parsedURL.query);// "name=barry"