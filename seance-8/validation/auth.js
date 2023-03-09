import joi from "joi";

export const SignUpValidation = joi.object({
    firstName: joi.string().required(),
    lastName: joi.string().required(),
    email : joi.string().email({ minDomainSegments: 2, tlds: { allow: ['com', 'net','fr'] } }),
    password:  joi.string().required(),
    
})

export const loginValidation = joi.object({
    email : joi.string().email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } }),
    password:  joi.string().required(),
})