module.exports = midleware = (req,res,next)=>{
    // console.log("chal raha hai")
    if (!req.query.age){
        res.send("dont allow")
    }else if (req.query.age<18){
        res.send("less age")
    }else
  {  next()}
}
