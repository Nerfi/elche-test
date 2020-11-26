const mongoose = require('mongoose');

const Schema = mongoose.Schema;


const userSchema = new Schema({

  user: {
    name: String,
    avatar: String,
    favs: [],
    lastShowed: [],
    email: {type: String, required: true},
    password: {type: String, required: true}
  },
  contents: [
    {
      id: String,
      title: String,
      cover: String,
      duration: Number,
      url: String,
      section: String
    }
  ],
  movies: [
  {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Movie"

  }
  ]

});

const User = mongoose.model('User', userSchema);

module.exports = User;
