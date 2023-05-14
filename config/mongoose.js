const mongoose = require('mongoose');
require('dotenv').config();

//connect to DB
mongoose.connect(process.env.MongoDB_URL);
const db = mongoose.connection;

db.on('error', console.error.bind(console, "Error connecting to db"));

db.once('open', function () {
    console.log("Successfully connected to db");
});