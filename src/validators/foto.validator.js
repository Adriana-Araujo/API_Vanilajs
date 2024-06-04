import {body, param} from "express-validator";

export const fotoValidator = [
    body('titulo').isString().withMessage('Titulo é obrigatório'),
    body('url').isString().withMessage('ULR é obrigatória'),
    body('produtoId').isNumeric().withMessage('Produto Id é obrigatória')
]

export const fotoUpdateValidator = [
    param('id').isInt().withMessage('ID é obrigatório'),
    body('titulo').isString().withMessage('Titulo é obrigatório'),
    body('url').isString().withMessage('ULR é obrigatória'),
    body('produtoId').isNumeric().withMessage('Produto Id é obrigatória')
]

export const fotoIdValidator = [
    param('id').isInt().withMessage('ID é obrigatório'),
]