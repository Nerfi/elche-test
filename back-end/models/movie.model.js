const mongoose = require('mongoose');

const Schema = mongoose.Schema;


const movieSchema = new Schema({
  id: String,
  title: String,
  cover: String,
  url: String,
  duration: Number,
  rating: String,
  votes: Number,
  totalVotes: Number
});

const Movie = mongoose.model('Movie', movieSchema);

module.exports = Movie;
