const express = require("express");

let http = require("http");

let fs = require("fs");
const { listeners } = require("process");

const app = express();

//app.get("/", (req, res) => {

http
  .createServer(function (req, res) {
    fs.readFileSync("test.txt", function (err, data) {
      if (err) {
        return console.log(err);
      }
      console.log("asyn data: " + data.toString());
      res.write(data);
      res.end();
    });
  })
  .listen(8080);

