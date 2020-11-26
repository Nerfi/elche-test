const Joi = require('@hapi/joi');

//validation
const registerValidatioon = (data) => {

  const schema = Joi.object({
    name: Joi.string().min(4).required(),
    email: Joi.string().min(6).required().email(),
    password:  Joi.string().min(6).required()

  });

  const validation = schema.validate(data)
  return validation;
}


//login validation
const loginValidatioon = (data) => {

  const schema = Joi.object({

    email: Joi.string().min(6).required().email(),
    password:  Joi.string().min(6).required()

  });

  return schema.validate(data, schema);
}



module.exports.registerValidatioon = registerValidatioon;

module.exports.loginValidatioon = loginValidatioon;
