const mongoose = require("mongoose");

let RolexWatch = new mongoose.Schema(
    {
        type: String,
        name: String,
        price: Number,
        imgSrc: String,
    },
    {
        collection: "RolexWatches",
        versionKey: false
    }
);

module.exports = mongoose.model("RolexWatches", RolexWatch);
