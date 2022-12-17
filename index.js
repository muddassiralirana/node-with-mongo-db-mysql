const express = require ("express")
const midleware = require("./middleware")
const path = require("path")
const app = express();

const route = express.Router()
    
// app.use(midleware)
route.use(midleware)
app.get("",(req,res)=>{
    res.send("ali")
})
route.get("/check",(req,res)=>{
    res.send("cheke")
})
// const publicPath = path.join(__dirname,"public");

// app.use(express.static(publicPath))

// app.get("", (req,res)=>{
//     console.log("Aaa  ==>" ,req.query)
// res.send("hello jani "+ req.query.name)
// })
// app.get("/about", (req,res)=>{
// res.send("<h1>ali rana muddassir </h1> <a href='/help' > help </a>")
// })
// app.get("/help", (req,res)=>{
// res.send({
//     name:"muddassir",
//     id:23
// })
// })
// app.get("/abc", (req,res)=>{
// res.send("hello jani"+ req.query.name)
// })


app.use("/",route)


app.listen(4000)