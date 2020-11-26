const router = require('express').Router();


let Movie = require('../../back-end/models/movie.model');

router.route('/').get((req, res) => {
  Movie.find()
    .then(movies => res.json(movies))
    .catch(error => res.status(400).json('Error', + error));
});


module.exports = router;
