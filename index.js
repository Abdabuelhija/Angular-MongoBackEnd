const express = require("express");
const app = express();
const PORT = 8000;

const path = require("path");
const folder = express.static(path.join(__dirname, "../angularProject/dist"));
app.use(folder);
const cors = require("cors");
app.use(cors());
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin","http://localhost:4200");
    res.header("Access-Control-Allow-Headers","Origin, X-Requested-With, Content-Type, Accept");
    next();
});

const mongoose = require("mongoose");
const mongoDB = "mongodb://127.0.0.1:27017/AbdsDB";
mongoose.connect(mongoDB, { useNewUrlParser: true });
const bodyParser = require("body-parser");
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

var users = require("./routes/users.route");
app.use("/users", users);

var carts = require("./routes/carts.route");
app.use("/carts", carts);

var rolexWatches = require("./routes/rolexWatches.route");
app.use("/RolexWatches", rolexWatches);

var tissotWatches = require("./routes/tissotWatches.route");
app.use("/Tissotwatches", tissotWatches);

var armaniWatches = require("./routes/armaniWatches.route");
app.use("/ArmaniWatches", armaniWatches);

var popularWatches = require("./routes/popularWatches.route");

app.use("/popuolarwatches", popularWatches);


app.get('/', (req, res) => {
    res.send('Welcome to the server!')
  });
  
app.listen(PORT, () => { console.log("server started to listen to port ", PORT) });


