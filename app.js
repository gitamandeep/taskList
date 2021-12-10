const express = require("express");
const bodyParser = require("body-parser");

const app = express();
const port = process.env.PORT || 3000

app.set("view engine", "ejs");
let toDoTask = [];
app.use(bodyParser.urlencoded({extended : true}));
app.use(express.static("public"));
app.get("/",function(req,res){
   let today = new Date();
   let options = {
       weekday : "long",
       day : "numeric",
       month : "long"   
   };
let day = today.toLocaleDateString("en-IN",options);


    res.render("list",{listTitle : day, newTask : toDoTask});

});
app.post("/",function(req,res){
    var item = req.body.addTask;
    toDoTask.push(item);
    res.redirect("/");
});



app.listen(port,function(){
console.log("server is started")
});