'use strict';
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const genreSchema = new Schema({ name: { type: 'string', default: 'All Genres' } });


const MovieSchema = new Schema({
    title: {
        type: String,
        default: "Movie Title"
    },
    genre: genreSchema,
    numberInStock: {
        type: Number,
        default: '0'
    },
    dailyRentalRate: {
        type: Number,
        default: '0'
    }
})


module.exports = mongoose.model('Movie', MovieSchema, 'Movies');

