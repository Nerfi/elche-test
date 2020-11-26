const router = require('express').Router();
const {registerValidatioon} = require('../../back-end/validation/validation')

//requiring the user model
let User = require('../../back-end/models/user.model');


router.post('/register', async (req, res) => {

//validating the data
  const {error} = registerValidatioon(req.body);

  if(error) return res.status(400).send(error.details[0].message);

  //checking if the user is already in db

  const emailExist = await User.findOne({
    email: req.body.email
  });

  if(emailExist) return res.status(400).send('Email already exists');

//creating new user
  const user = new User({
    name: req.body.name,
    email: req.body.email,
    password: req.body.password

  });

  try {
    const saveUser = await user.save();
    res.send(saveUser);

  } catch(err){
    res.status(4000).send(err)
  }

})

//maybe I will not need this route
router.route('/').get((req, res) => {
  User.find()
    .then(users => res.json(users))
    .catch(error => res.status(400).json('Error', + error));
});




module.exports = router;
