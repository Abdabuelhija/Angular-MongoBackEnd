const express = require("express");
const userRoute = express.Router();
let User = require("../models/User");

userRoute.post("/", async (req,res)=>{
    let user = new User(req.body);
    try {
        let savedUser = await user.save();
        res.status(200).send(savedUser);
    } catch (error) {
        res.status(500).send({ error: error.message });
    }
});

userRoute.get("/", async (req,res)=>{
    let users = await User.find({});
    res.status(200).send(users);
});
    
module.exports = userRoute;