const express=require("express");
const app=express();
const path =require('path');
app.set('view engine', 'ejs');
const bodyParser=require("body-parser");
const request=require("request");
app.use(bodyParser.urlencoded({extended:true}));
//use /before accessing public elements 
app.use(express.static(__dirname + '/public'));

app.get("/",function(req, res){
    //res.sendFile(__dirname+"/index.html");
    res.render('index');
});
app.get("/views/template1",function(req,res){
    res.sendFile(__dirname+"/views/template1.html");
});
app.get("/views/template2",function(req,res){
    res.sendFile(__dirname+"/views/template2.html");
});

/*app.get("/views/template3",function(req,res){
    res.sendFile(__dirname+"/views/template3.html");
});*/
app.get("/about",function(req,res){
    res.render("about"); 
});
/*app.use(express.static("/public/upload.js"),function(req,res){
    res.sendFile(__dirname+"/public/upload.js");
});*/
//app.use(express.static(__dirname + "/public/css/style.css"));
app.listen(3000,function(){
    console.log("the server is running on port 3000");
    }); 