const mongoose = require("mongoose");

let PopularWatch = new mongoose.Schema(
    {
        type: String,
        name: String,
        price: Number,
        imgSrc: String,
    },
    {
        collection: "popuolarwatches",
        versionKey: false
    }
);

module.exports = mongoose.model("popuolarwatches", PopularWatch);
