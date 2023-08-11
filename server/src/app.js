const express = require("express");
const app = express();
require("../db/conn")
const Tourist = require("../models/tourist")
const Touristclient = require("../models/client")

const port = process.env.PORT || 5000;
app.use(express.json());
app.use(express.urlencoded({extended:false}));


app.post("/touristclient", async(req,res)=>{
    try{
        console.log(req.body)
        const user =  new Touristclient({
            name : req.body.name,
            email : req.body.email,
            password : req.body.password,
            phone : req.body.phone,
            DOB : req.body.DOB
        });
        const touristClientData = await user.save();
        res.status(201).send(touristClientData)
    }catch(err){
        res.send(err);
    }
})

app.get("/touristclient",async(req,res)=>{
    try{
        const touristClientData = await Touristclient.find();
        res.send(touristClientData);
    }catch(err){
        res.send(err)
    }
})

app.post("/tourist-place",async(req,res)=>{
    try{
        console.log(req.body)
        const placeData = new Tourist({
            place : req.body.place,
            description : req.body.description,
            rating : req.body.rating
        })

        const touristData = await placeData.save();
        res.status(201).send(touristData);

    }catch(err){
        res.send(err)
    }
})

app.get("/tourist-place", async(req,res)=>{
    try{
        const touristData = await Tourist.find();
        res.send(touristData);
    }catch(err){
        res.send(err);
    }
})

app.listen(port,()=>{
    console.log(`connection is setup at ${port}`)
});