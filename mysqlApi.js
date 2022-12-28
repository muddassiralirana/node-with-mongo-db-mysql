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

app.post("/" , (req,res)=>{
    con.query("INSERT INTO users SET ?",req.body,(err, result, field)=>{
        if(err) err;
        res.send(result)
    })
})

app.put("/:id" , (req, res)=>{
    let data= [req.body.name, req.params.id];
    con.query("UPDATE users SET name= ? where id = ? "  , data , (err,result,field) =>{
        if(err) err;
        res.send(result)
    })
})

app.delete("/:id" , (req,res)=>{
    let data = [req.params.id];
    con.query("DELETE from users where id = "+data  , (err, result ,field)=>{
        if(err) err;
        res.send(result)
    })
})

app.listen(5000,()=>{
    console.log("working 5000 port ");
})