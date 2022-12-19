const mongoose= require('mongoose');

mongoose.connect('mongodb://localhost:27017/student')


const paperSchema= new mongoose.Schema({
    name:String,
    no:Number,
    value:String
})  

// const saveinDB = async()=>{
//     const Paper= mongoose.model("paper", paperSchema);
//     let data = await Paper({
//         name:"papa",
//         no:45,
//         value:"web"
//     }) 
//     const result = await data.save();
//     console.log(result);
// }


// const updateinDB = async()=>{
//     let Paper= mongoose.model("paper", paperSchema);
//     let data =await Paper.updateOne (
//         {name:"rana0"},
//         {
//             $set:{name:"ali khan g", no:5555555}
//         }
//     )
//     console.log(data)
// }

// const deleteinDB = async()=>{
//     let paper=mongoose.model("paper" , paperSchema);
//     let data = await paper.deleteOne({name:"abc g RANA"})
//      console.log(data);
// }

const viewinDB = async()=>{
    let paper=mongoose.model("paper" , paperSchema);
    let data = await paper.find({} )
    // let data = await paper.find({name:"ali khan g"} )
     console.log(data);
}




// saveinDB()

// updateinDB()

// deleteinDB()
// viewinDB()