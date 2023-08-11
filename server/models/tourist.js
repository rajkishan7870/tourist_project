const mongoose = require("mongoose");
const validator = require("validator");

const touristSchema = new mongoose.Schema({
    
    place : {
        type : String,
        required : true,

    },
    description : {
        type : String,
        required : true,
    },
    rating : {
        type : Number,
        required : true,
    }

})


//create collection......

const Tourist = new mongoose.model("Tourist",touristSchema);

module.exports = Tourist;