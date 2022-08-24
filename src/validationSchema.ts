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
    contact:joi.string().required().min(10),
    address:joi.string().required().min(3).max(30)           
})

const shelterSchema = joi.object({
    roomNo:joi.number().min(3).required(),
    dateOfArrival:joi.string().required(),
    dateOfAdoption:joi.string().required(),
    
})

export {animalSchema,ownerSchema,shelterSchema};