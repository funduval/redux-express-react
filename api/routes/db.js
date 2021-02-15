const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const env = require('dotenv').config()
const Movie = require("./movieSchema")
const bodyParser = require("body-parser");
const logger = require("morgan");
const dbAuth = process.env.DB_AUTH;

const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://funduval:" + dbAuth + "@cluster0.hptmi.mongodb.net/movie-library?retryWrites=true&w=majority";


mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('Connected to MongoDB...'))
    .catch(err => console.error('Could not connect to MongoDB...'));



module.exports = router;