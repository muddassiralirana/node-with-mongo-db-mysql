const dbconnect = require("./mongodb")

// dbconnect().then((resp)=>{
//     resp.find().toArray().then((data)=>{
//         console.log(data)
//     })
// })

// console.log(dbconnect())

const main = async ()=>{
    let data = await dbconnect();
    data= await data.find().toArray()
    console.log(data)
}

main()