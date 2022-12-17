const express = require("express");
const { send } = require("express/lib/response");
const dbconnect = require("./mongodb");
const mongodb = require('mongodb')
const app = express()

app.use(express.json());

app.get("" , async(req,res)=>{

    let data = await dbconnect()
    let result= await data.find({}).toArray()

    res.send(result)
})

app.post("", async (req,res)=>{
    let data = await dbconnect();
    data= await data.insert(req.body)
    res.send(data)
})

app.put("", async (req,res) =>{
    let data = await dbconnect();
    data = await data.updateOne(
        {name:"abc"},
        {$set:{name:req.body.name}}
    )
    res.send(data)
})

app.delete("/:id" , async (req,res)=>{
    let data = await dbconnect();
    console.log(req.params.id)
    data= await data.deleteOne({_id:new mongodb.ObjectId(req.params.id)})
    res.send(data)
})

// app.delete("" , async (req,res)=>{
//     let data = await dbconnect();
//     data= await data.deleteOne(req.body)
//     res.send(data)
// })


app.listen(5000)