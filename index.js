const http= require('http');
const hostname='localhost';
const port=8008;

const server=http.createServer((req,res)=>{
res.statusCode=200;
res.setHeader('content_type','text/italic')
res.end("Hello World!!");
});

server.listen(port,hostname,()=>{
    console.log(`My first link is http://${hostname}:${port}/`)
})
