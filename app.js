const express = require("express");
const bodyParser = require("body-parser");
const { static } = require("express");
const date = require(__dirname + '/date.js')
const app = express();



let items = ["buy Food", "buy Vegitable", "add your list"];
let workIteams = [];

app.set("view engine", "ejs");


app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));

app.get("/", function(req, res){
    
    const today = date.getDate()
    const toDay = date.day()
    
    
    
    res.render("list", {listTitle: today, newListItems: items});
});

app.post("/", function(req, res){
    let item = req.body.newItem;
    if (req.body.list === "work") {
        workIteams.push(item);
        res.redirect("/work");
    } else {
        items.push(item);
        res.redirect("/"); 
    }
});

app.get("/work", function(req, res){
    res.render("list", {listTitle: "work List", newListItems: workIteams});
});


app.get('/about', function(req, res){
    res.render('about',)
})

app.listen(3000, function(){
    console.log("server is ready to work");
});