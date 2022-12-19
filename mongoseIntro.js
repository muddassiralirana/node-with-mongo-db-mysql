const mongoose = require("mongoose")

const main = async()=>{
    await mongoose.connect("mongodb://localhost:27017/student");
    const paperSchema = new mongoose.Schema(
        {
            name:String
        }
    )

    const PaperModel = mongoose.model("paper", paperSchema);
    let data = await PaperModel({name:"abc g RANA",no:25})
    let result = await data.save()
    console.log(result)
}

main()