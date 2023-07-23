const mongoose = require("mongoose");

let ArmaniWatch = new mongoose.Schema(
    {
        type: String,
        name: String,
        price: Number,
        imgSrc: String,
    },
    {
        collection: "ArmaniWatches",
        versionKey: false
    }
);

module.exports = mongoose.model("ArmaniWatches", ArmaniWatch);
