const express= require("express");
const EventEmitter= require("events");
const { send } = require("process");

const app = express()
const event =new EventEmitter()

let count =0
event.on("countApi",()=>{
    count ++;
    console.log(count)
})

app.get("/" , (req,res)=>{

    res.send("gcvbnm")
    event.emit("countApi")
})
app.get("/u" , (req,res)=>{

    res.send("update")
})
app.get("/g" , (req,res)=>{

    res.send("get")
})



app.listen(5000)