const Joi = require('joi');



const peopleSchema = Joi.object({
    first : Joi.string().min(3).regex(/^[a-zA-Z]*$/).required(),
    last: Joi.string().min(3).regex(/^[a-zA-Z]*$/).required()
})

module.exports = peopleSchema