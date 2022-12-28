const mysql = require("mysql");

const con = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"",
    database:"test"
});

con.connect((err)=>{
    if(err){
        console.warn("error gaya hai not connected database")
    }else{
        console.log("connect hpogaya hai ")
    }
})

// con.query("CREATE TABLE `test`.`users` (`name` VARCHAR(500) NOT NULL)", (err,result)=>{
//     console.warn("result", result)
// })

// con.query("insert into test.users (name) value('rana')", (err,result)=>{
//     console.warn("result", result)
// })


con.query("select * from users", (err,result)=>{
    console.warn("result", result)
})