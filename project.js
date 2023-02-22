const express = require ("express");
const app=express();
const bodyParser = require("body-parser");
const https = require("https");
const url = "https://api.openweathermap.org/data/3.0/weather?q=London&appid=24123132123";
app.listen(2000);
app.get("/",function(req,res){
    res.sendFile(__dirname +"/prj.html")
})
app.post("/",function(req,res){
    https.get(url,function(respond){
respond.on("data",function(data){
    const sa=JSON.parse(data);
    res.send(sa);
})
})
})