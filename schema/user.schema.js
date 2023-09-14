import joi from 'joi';

export const userSignUp = joi.object().keys({
    
    userName: joi.string().required().
    min(3).max(30).
    regex(/^[a-zA-Z0-9]{3,15}$/)

    ,
    email: joi.string()
    .email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } })
    .required().min(3).max(30)
    .messages({
        'any.required': 'El email es requerido'
    })
    ,
    country: joi.string().min(3).max(30).optional(),
    image: joi.string().required().uri()
    .messages({
        'string.uri': 'La imagen debe ser una URL'
    })
    ,
    password: joi.string().required().min(8).max(30)

});