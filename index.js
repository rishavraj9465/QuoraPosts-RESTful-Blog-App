const express = require("express");
const app = express();
const port = 8080;
const path = require("path");//will give path for views folder
const { v4: uuidv4 } = require('uuid'); //UUID required
const methodOverride = require("method-override");//Topic 10 -edit route

app.use(express.urlencoded({extended:true}));//middleware:parse to read data by express
app.use(methodOverride('_method'));//Topic 10- edit route

app.set("view engine","ejs");//using EJS
app.set("views",path.join(__dirname,"views"));//GIVE PATH FOR VIEWS FOLDER

app.use(express.static(path.join(__dirname,"public")));//PATH FOR running server from anywhere in folder


let posts = [             //dont make it const = then difficult to delete it
    {
        id:"1a",
        username: "rishavraj",
        content : "Hard work is important to achieve success"
    },
     {
        id:uuidv4(),
        username: "rahulraj",
        content : " I got selected in my 1st interview"
    }, 
    {
        id:uuidv4(),
        username: "abhiraj",
        content : " I am working in amazon"
    }
];

//Topic 4 = Index Route
app.get("/posts",(req,res) =>{
    res.render("index.ejs",{posts});
});

//Topic 5 =Create & New Route / Topic 6- Redirect 
app.get("/posts/new",(req,res)=>{//in get = info comes under query
    res.render("new.ejs");
});

app.post("/posts",(req,res)=>{//post= info comes under req.body
    let {username,content} = req.body ;
    let id = uuidv4() ;
    posts.push({id, username,content});
    res.redirect("/posts");
});

//Topic 7 = Show Route
app.get("/posts/:id",(req,res)=>{
    let {id} = req.params;
    console.log(id);
    let post= posts.find((p) => id === p.id);
    res.render("show.ejs",{post});
});  

//Topic 8 Creating IDs (UUID)
//const { v4: uuidv4 } = require('uuid'); //UUID required
//uuid()

//Topic 9 Update Request= PATCH
//by hoppscotch
app.patch("/posts/:id",(req,res)=>{
    let {id} = req.params;
    let newContent= req.body.content ;
    let post= posts.find((p) => id === p.id);
    post.content = newContent;
    console.log(post);
    res.redirect("/posts");
});

 
//Topic 10 -Edit Profile


app.get("/posts/:id/edit" ,(req,res)=>{
    let {id} = req.params;
    let post= posts.find((p) => id === p.id);
    res.render("edit.ejs",{post});
});



//Topic 11  Destroy Route

app.delete("/posts/:id", (req,res)=>{
    let {id} = req.params;
    posts= posts.filter((p) => id !== p.id);
    res.redirect("/posts");
});




app.listen(port, ()=>{
    console.log(`listening on port ${port}`);
})