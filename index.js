const express = require("express");
const { json } = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const routes = require("./routes/todoroutes");
const flights = require("./controllers/todocontroller");

//Initialize Express
const app = express();

app.use(json());
app.use(bodyParser.json());

//Activate Routes
app.use("/", routes);

//Listen for Requests
const port = process.env.PORT || 3000

app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
});