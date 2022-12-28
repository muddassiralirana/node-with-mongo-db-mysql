const express = require("express");
const con = require("./configMysql")

const app= express()


app.use(express.json())

app.get("/" ,(req,res)=>{
    
    let data = con.query("select * from users",(err,result)=>{
        if(err){
            res.send(err)
        }else{
            res.send(result)
        }
    })


    
})

app.listen(5000,()=>{
    console.log("working 5000 port ");
})