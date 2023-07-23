const express = require("express");
const cartRoute = express.Router();
const Cart = require("../models/Cart");

cartRoute.post("/", async (req,res)=>{
    let cart = new Cart(req.body);
    try {
        let savedCart = await cart.save();
        res.status(200).send(savedCart);
    } catch (error) {
        res.status(500).send({ error: error.message });
    }
});
cartRoute.get("/", async (req,res)=>{
    let carts = await Cart.find({});
    res.status(200).send(carts);
});
module.exports = cartRoute;
