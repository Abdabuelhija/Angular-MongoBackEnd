const express = require("express");
const armaniWatchRoute = express.Router();
let ArmaniWatch = require("../models/ArmaniWatches");

armaniWatchRoute.get("/", async (req,res)=>{
    let armaniWatches = await ArmaniWatch.find({});
    res.status(200).send(armaniWatches);
});

module.exports = armaniWatchRoute;
