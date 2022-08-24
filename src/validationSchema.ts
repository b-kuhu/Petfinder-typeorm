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

const shelterSchema = joi.object({
    roomNo:joi.number().min(3).max(6).required(),
    dateOfArrival:joi.date().required(),
    dateOfAdoption:joi.date().required()
})

export {animalSchema,ownerSchema,shelterSchema};