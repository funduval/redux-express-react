const Movie = require('./movieSchema');
const express = require('express');
const mongoose = require("mongoose");
const router = express.Router();

router.get('/', async (req, res) => {
  console.log("movie schema", Movie)

  const movies = await Movie.find();
  console.log("movies", movies)
  res.send(movies);
});




module.exports = router;
