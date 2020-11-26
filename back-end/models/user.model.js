const mongoose = require('mongoose');

const Schema = mongoose.Schema;

//creating new schem
const userSchema = new Schema({
  name: {type: String, required: true},
  avatar : {type: String},
  favs: [],
  lastShowed: [],
  email: {type: String, required: true},
  password: {type: String, required: true},
  movies: []
});

//contenst will be an array of objects
const User = mongoose.model('User', userSchema);

module.exports = User;



///references
  //contents: [
    //{
      //id: String,
      //title: String,
      //cover: String,
      //duration: Number,
      //url: String,
      //section: String
    //}
  //]
