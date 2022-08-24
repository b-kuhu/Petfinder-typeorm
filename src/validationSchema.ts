const joi = require('joi');

const animalSchema = joi.object({
  name:joi.string()
           .min(3)
           .max(20)
           .required(),
  breed:joi.string().min(3).required()         
})