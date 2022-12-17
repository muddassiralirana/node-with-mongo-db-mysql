const dbconnect = require ("./mongodb");



const insert = async()=>{
    let data = await dbconnect();
    data= await data.insert([{name:"ahmed"},{name:"abc"}])

    if (data.acknowledged===true){
        console.log("inserted data")
    }
   

}

insert()