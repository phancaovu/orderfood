const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const categorySchema = new Schema(
    //CART_ID ,CART_NAME,CART_PRICE,CART_NUMBER ,CART_IMAGE,CART_STATUS
    {
        CART_ID:{
            type: mongoose.Schema.Types.ObjectId,
            ref: "Topic",
            require: true,
        }
        , 
        CART_NAME: {
            type: String,
            required: true,
            trim: true
        },
        CART_PRICE: {
            type: String,
            require: true,
            trim: true
        },
        CART_NUMBER: {
            type: String,
            required: true
        },
        CART_IMAGE: {
            type: String,
            required: true
        },
        CART_STATUS: {
            type: String,
            required: true
        }
    },{ timestamps: true },
);

module.exports = mongoose.model("cart", categorySchema);