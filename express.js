const express = require('express');
let http=require('http');

const app=express();

let fs=require('fs');
const { listeners } = require('process');

app.get('/',(req,res)=>{
http.createServer(function(req,res){

    fs.readFile('test.txt',function(err,data){
        
        if(err){
            return console.log(err);
        }
        console.log('asyn data: '+data.toString());
        res.write(data);
        res.end();
    });

}).listen(8080);
});
