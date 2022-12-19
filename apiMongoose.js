const express = require("express");

require("./configMongoose");
const paper= require("./paperMongooseSchema");

const app = express()
app.use(express.json())

app.post("/create", async (req,res)=>{
    let data =new paper(req.body)
    let result =await data.save()

    res.send(result)
})

app.get("/create", async (req,res)=>{
    let result = await paper.find({})
    res.send(result)
})

app.put("/create/:_id" , async (req,res)=>{

    let result = await paper.updateOne(req.params, {
        $set:req.body
    })
    res.send(result)
})

app.delete("/create/:_id", async(req,res)=>{
   
    let result = await paper.deleteOne(req.params)
    res.send(result)
})

app.get("/search/:key", async (req,res)=>{
    let data = await paper.find(
        {
            "$or":[
                {"name":{$regex:req.params.key}},
                // {"name":{$regex:req.params.key}}, //or bhi field main search karna ho to wo bhi add karte jao
            ]
        }
    )
    res.send(data)
})

app.listen(5000)