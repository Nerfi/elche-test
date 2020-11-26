const router = require('express').Router();

//requiring the user model
let User = require('../../back-end/models/user.model');

router.post('/register', async (req, res) => {

  const user = new User({
    name: req.body.name,
    email: req.body.email,
    password: req.body.password

  });

  try {
    const saveUser = await user.save();
    res.send(saveUser);

  } catch(error){
    res.status(4000).send(error)
  }

})

//maybe I will not need this route
router.route('/').get((req, res) => {
  User.find()
    .then(users => res.json(users))
    .catch(error => res.status(400).json('Error', + error));
});




module.exports = router;
