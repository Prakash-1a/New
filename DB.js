const mongoose=require("mongoose");
mongoose.connect(
    "mongodb+srv://prakash:Prakashkr1a@cluster0.entca5m.mongodb.net/?retryWrites=true&w=majority"
).then((res)=>{
    console.log('db connected')
}).catch((e)=>{
    console.error('error in db',e.message)
})