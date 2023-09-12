import joi from 'joi';

export const userSignUp = joi.object().keys({
    firstName: joi.string(
        ).min(3).max(15
    ).required(),
    lastName: joi.string().required().
    min(3).max(15)
    ,
    userName: joi.string().required().
    min(3).max(15).
    regex(/^[a-zA-Z0-9]{3,15}$/)
    ,
    email: joi.string()
    .email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } })
    .required().min(3).max(30)
    .messages({
        'any.required': 'El email es requerido'
    })
    ,
    country: joi.string().required().min(3).max(30),
    image: joi.string().required().uri()
    .messages({
        'string.uri': 'La imagen debe ser una URL'
    })
    ,
    password: joi.string().required().min(8).max(30).alphanum()
    .messages({
        'string.alphanum': 'La contraseña debe ser alfanumérica'
    })

});