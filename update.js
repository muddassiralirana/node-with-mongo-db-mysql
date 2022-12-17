const dbconnect = require("./mongodb");


const update = async ()=>{

    let data = await dbconnect()
    let result = await data.updateOne(
        {name:"ahmed"},{
            $set:{name:"rana ali sher"}
        }
    )

    console.log(result)

}

update()

// update one aik update kare ga first wala
// update or upodate many sab kare ga update 
