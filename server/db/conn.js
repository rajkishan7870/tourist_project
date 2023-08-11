const mongoose = require("mongoose");
mongoose.connect("mongodb://127.0.0.1:27017/tourists-api")
.then(()=>{
    console.log("connection done")
})
.catch((err)=>{
    console.log("No connection-1")
});

