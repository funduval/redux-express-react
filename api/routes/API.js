const Movie = require('./movieSchema');
const express = require('express');
const mongoose = require("mongoose");
const router = express.Router();

router.get('/', async (req, res) => {

  const movies = await Movie.find();
  res.send(movies);
});




module.exports = router;
