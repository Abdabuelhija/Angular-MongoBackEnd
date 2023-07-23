const User = require("./User");
const mongoose = require("mongoose");
let Cart = new mongoose.Schema(
    {
        products:[],
        //  user:User,
        user:String,
        isPaid:Boolean,
        totalPrice:Number,
    },
    {
        collection:"Carts",
        versionKey: false
    }
);
module.exports = mongoose.model("Carts",Cart);