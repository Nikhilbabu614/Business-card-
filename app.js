const express = require("express");
const fileUpload = require('express-fileupload');
const app = express();

app.use(fileUpload());


app.use(express.static("public"));
app.use(express.static("uploads"));
app.use(express.urlencoded({extended:true}));

app.set("view engine","ejs");

var fname="";
var lname="";
var desig="";
var comp = "";
var phone = "";
var mail = "";
var house = "";
var twitter = "";
var linkedin ="";
var insta ="";
var github = "";
var whatsapp ="";
var docname="";

app.get("/",function (req,res) {
    res.render("home",{picture:docname,fname:fname,lname:lname,desig:desig,comp:comp,phone:phone,mail:mail,house:house,twitter:twitter,linkedin:linkedin,insta:insta, github:github,whatsapp:whatsapp});
});

app.get("/index",function (req,res) {
    res.render("index");
});



app.post("/",function (req,res) {
    var fname = req.body.fname;
    var lname = req.body.lname;
    var desig = req.body.desig;
    var comp = req.body.comp;
    var phone = req.body.phone;
    var mail = req.body.mail;
    var house = req.body.house;
    var twitter = req.body.twitter;
    var linkedin =req.body.linkedin
    var insta = req.body.insta;
    var github = req.body.github;
    var whatsapp =req.body.whatsapp;

    var doc = req.files.picture;
    var docname = doc.name;
        
    doc.mv("./uploads/"+ docname);
    res.render("home",{picture:docname,fname:fname,lname:lname,desig:desig,comp:comp,phone:phone,mail:mail,house:house,twitter:twitter,linkedin:linkedin,insta:insta, github:github,whatsapp:whatsapp});
});









app.listen(3000,function () {
    console.log("Server started at port :3000");
});