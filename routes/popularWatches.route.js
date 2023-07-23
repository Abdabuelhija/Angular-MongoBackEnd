const express = require("express");
const popularWatchRoute = express.Router();
let PopularWatch = require("../models/PopularWatches");

popularWatchRoute.get("/", async (req,res)=>{
    let popularWatches = await PopularWatch.find({});
    res.status(200).send(popularWatches);
});

module.exports = popularWatchRoute;
