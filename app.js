const express=require("express");
const bodyParser=require("body-parser");
const request=require("request");

const app=express();

app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended:true}));

app.get("/about",function(request,response){
    response.sendFile(__dirname + "/index.html");
});

app.post("/about",function (req,response){
    var firstname=req.body.first;
    var lastname=req.body.last;
    var mail=req.body.email;
     
    console.log("First Name:",firstname);
    console.log("Last Name:" ,lastname);
    console.log("Email:",mail);

});




app.listen(3000,function(){
    console.log("Server run in 5000");
});



