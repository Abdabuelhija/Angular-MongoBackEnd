const express = require("express");
const tissotWatchRoute = express.Router();
let TissotWatch = require("../models/TissotWatch");

tissotWatchRoute.get("/", async (req,res)=>{
    let tissotWatches = await TissotWatch.find({});
    res.status(200).send(tissotWatches);
});

module.exports = tissotWatchRoute;
