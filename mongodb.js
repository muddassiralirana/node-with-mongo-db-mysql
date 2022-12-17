const {MongoClient} = require("mongodb");
const url ="mongodb://localhost:27017";
const database="student"
const client = new MongoClient(url);

async function dbconnect(){
    let result =await client.connect()
    let db =result.db(database)
    return db.collection("paper");
    // let collection=db.collection("paper");
    // let response= await collection.find({}).toArray();
    // console.log(response)
}

module.exports= dbconnect