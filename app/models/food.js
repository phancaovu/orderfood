const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const trendingSchema = new Schema(
    // FOOD_ID,FOOD_NAME,FOOD_PRICE,FOOD_DETAIL,FOOD_IMAGE
    {
        FOOD_ID: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Song",
            require: true,
        },
        FOOD_NAME:{
            type: String,
            required: true,
            trim: true,
        },
        FOOD_PRICE: {
            type: String,
            required: true,
        },
        FOOD_DETAIL: {
            type: String,
            required: true,
        },
        FOOD_IMAGE: {
            type: String,
            required: true,
        }
    }, { timestamps: true },
);

module.exports = mongoose.model("food", trendingSchema);