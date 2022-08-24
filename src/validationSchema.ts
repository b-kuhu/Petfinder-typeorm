const joi = require('joi');

const animalSchema = joi.object({
  name:joi.string()
           .min(3)
           .max(20)
           .required(),
  breed:joi.string().min(3).required()         
})

const ownerSchema = joi.object({
    owner_name:joi.string() .required().min(3).max(20),
    contact:joi.number().required().min(10).max(11),
    address:joi.string().required().min(3).max(30)           
})

