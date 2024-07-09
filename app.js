//jshint esversion:6
const exp=require("express");
const bp=require("body-parser");
const date=require(__dirname+"/date.js");
console.log(date.getDate());
const app=exp();
const newitms=["Wake Up","Brush Teeth","Shit"];
const workitms=[];
app.set("view engine","ejs");
app.use(exp.static("public"));
app.use(bp.urlencoded({extended:true}));
app.get("/",function (req,res){
  
  res.render("list",{listTitle:date.getDate(), newitems:newitms});
});
app.post("/",function(req,res){
  const newitm=req.body.new;
  if(req.body.list==="Work"){
    workitms.push(newitm);
    res.redirect("/work");
  }
  else{
    newitms.push(newitm);
    res.redirect("/");
  }
 



});
app.get("/work",function (req,res){
  res.render("list",{listTitle:"Work List", newitems:workitms});
} );

app.listen(3000,function(){
console.log("Server is running at port 3000");
});