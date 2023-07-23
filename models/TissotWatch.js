const mongoose = require("mongoose");

let TissotWatch = new mongoose.Schema(
    {
        type: String,
        name: String,
        price: Number,
        imgSrc: String,
    },
    {
        collection: "Tissotwatches",
        versionKey: false
    }
);

module.exports = mongoose.model("Tissotwatches", TissotWatch);
