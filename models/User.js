const mongoose = require("mongoose");
let User = new mongoose.Schema(
    {
        name : String,
        birthdate: String,
        userimg: String,
        gender: String,
        email : {
            type: String,
            unique: true
        },
        password: String
    },
    {
        collection:"Users",
        versionKey: false
    }
);
module.exports = mongoose.model("Users",User);