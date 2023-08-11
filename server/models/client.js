const mongoose = require("mongoose");
const validator = require("validator");

const touristClientSchema = new mongoose.Schema({
    name : {
        type : String,
        required : true,
        minlength : 3
    },
    email : {
        type : String,
        required : true,
        unique : [true, "email id already present"],
        validate(value){
            if(!validator.isEmail(value)){
                throw new Error("Invalid email")
            }
        }
        },
    password : {
        type : String,
        required : true,

    },
    phone : {
        type : Number,
        required : true,
        min : 10,
        unique : true,
    },
    
    DOB : {
        type : String,
        required : true,

    }

})


//create collection......

const Touristclient = new mongoose.model("Touristclient",touristClientSchema);

module.exports = Touristclient;