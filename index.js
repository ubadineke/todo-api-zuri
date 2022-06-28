const express = require('express');
const { json } = require("express");
const moongoose = require('mongoose');
const bodyParser = require('body-parser');
const routes = require("./routes/todoroutes");
const flights = require("./controllers/todocontroller");

//Initialize Express
const app = express();

app.use();

//Listen for Requests
const port = process.env.PORT || 3000

app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
});