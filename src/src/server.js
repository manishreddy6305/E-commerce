const express=require('express');
const app=express();
const cors=require('cors');
const bodyParser = require("body-parser");
const mongoose=require('mongoose');
const Devicedetails=require('./model/data');
const cartdetails=require('./model/cartdata');
const cartdata = require('./model/cartdata');
const durl="mongodb+srv://TOdo:firstproject@cluster0.pbeee.mongodb.net/E-commerce?retryWrites=true&w=majority";
mongoose.connect(durl,(err,db)=>{
    if (err) throw err;
    console.log("Database created!");
    global.db=db;
});
app.use(cors());
app.listen(process.env.PORT||3003);
app.use(express.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(express.static('styles'));
app.use(express.static('scripts'));
app.use(bodyParser.urlencoded({extended: true}));

app.get("/data",(req,res)=>{
    Devicedetails.find((err,result)=>{
        if(err)
        console.log(err);
        else
        {
            res.send(result);
        }
    })
})
app.post("/cartdata",(req,res)=>{
   const instance=new cartdetails(req.body);
   instance.save();
})
app.post("/cartdatadelete",async (req,res)=>{
    const deleteitem =await cartdetails.deleteOne({_id:req.body._id});
    res.send("hello");
 })
app.get("/cartdatai",(req,res)=>{
    cartdetails.find((err,result)=>{
        if(err)
        console.log(err);
        else
        {
            res.send(result);
        }
    })
})
app.post("/cartqty",async (req,res)=>{
    const update= await cartdetails.findOneAndUpdate({_id:req.body._id},{qty: (req.body.qty+1)});
    res.send("Hi");
})
// app.post("/fav",async (req,res)=>{

//         const update= await cartdetails.findOne({_id:req.body._id});
//         if(update.favourite=="No")
//         {
//             const update2= await cartdetails.findOneAndUpdate({_id:req.body._id},{favourite:"Yes"});
//             res.send("fav");
//         }
//         else{
//             const update2= await cartdetails.findOneAndUpdate({_id:req.body._id},{favourite:"No"});
//             res.send("nfav");
//         }

        
// })
app.post("/cartqty2",async (req,res)=>{
    const update= await cartdetails.findOneAndUpdate({_id:req.body._id},{qty: (req.body.qty-1)});
    res.send("Hi");
})
app.post("/redeem",async (req,res)=>{
    if(req.body.value=="SHREYA125")
        res.send("50");
    else
        res.send("0");
})