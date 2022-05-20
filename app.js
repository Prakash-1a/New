console.log("hi")

const express=require('express');
const res = require('express/lib/response');
const http=require('http');
// const route=express.Router();
// const routes=require("./Routes/routes");
const app=express();
const PORT=4000 || process.env;
app.use(express.json());
const db=require("./DB");
//app.use(routes);
app.listen(PORT,()=>{
    console.log("Server Running on "+ PORT);
});
// app.get('/hello',(req,res)=>{
//     res.status(400).send('Hi i m a developer')
// })
// app.listen(PORT,(res,req)=>{
//     console.log('Hi i m listening on '+PORT)
// })
// app.listen(PORT,()=>{
//     console.log('Hi i m listening on '+ PORT)
// })
// http.createServer((req,res)=>{
//     res.write('Hi');
//     res.end;
// }).listen(PORT)
// app.post('/hi',(req,res)=>{
//     res.status(400).send('Hi i m a developer')
// })
// app.listen(PORT,(res,req)=>{
//     console.log('Hi i m listening on '+PORT)
// })
// app.use(express.json())
// let data=[]
// app.post('/add',(req,res)=>{
//     const jsonData=[
//         {
//         "name":'ABC',
//         "rollno":'12'
//     },
// ];
//     res.status(200).json(jsonData)
    //  console.log(req.body.name)
    //  console.log(req.body.roll)
    //  const name=req.body.name
    //  const roll=req.body.roll
    //  const allempty=name=="" && roll=="";
    //  const allfilled=name!=="" && roll!==""
//      if(name=='')
//      {
//          res.status(400).send('Please enter Your name')
//          console.log({name})
//          console.log({roll})
//      }
//      if(roll=='')
//      {
//         res.status(400).send('Please enter ur roll')
//         console.log({name})
//         console.log({roll})
//      }
//      if(name=='' && roll=='')
//      {
//         res.status(400).send('Please enter ur name and roll')
//      }
//      if(name!=='' && roll!=='')
//      {
//         res.status(200).send('Success')
//         console.log({name},{roll})
//         data.push(req.body)
//      }
// })
// app.listen(PORT,(res,req)=>{
//     console.log('Hi i m listening on '+PORT)
// })

// app.get('/getData',(req,res)=>{
//     res.status(200).json(data)
// })