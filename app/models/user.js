const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const login = new Schema(
    { 
        phoneNumber:{
        type: String
        },
        passWord:{
            type: String
        }
    }
)
module.exports=  mongoose.model('user', login );