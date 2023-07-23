const express = require("express");
const rolexWatchRoute = express.Router();
let RolexWatch = require("../models/RolexWatches");

rolexWatchRoute.get("/", async (req,res)=>{
    let rolexWatches = await RolexWatch.find({});
    res.status(200).send(rolexWatches);
});

module.exports = rolexWatchRoute;
