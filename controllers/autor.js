const ErrorResponse = require("../helper/errorResponse")
const Autor = require('../models/Autor')

exports.postAutor = async (req, res, next) => {

    try{
        const autorData = await Autor.create(req.body);
        res.status(200).json({
            status : 200,
            data: autorData
        });
    }catch(err){
        res.status(400).json({status:400, mensaje: err})
    }
};

exports.getAutores = async (req, res, next) => {

    try{
        const autores = await Autor.find();
        res.status(200).json(autores);
    }catch(err){
        res.status(400).json({status:400, mensaje: err})
    }
};

exports.getAutor = async (req, res, next) => {

    try{
        const autor = await Autor.findById(req.params.id);

        if(!autor){
            return next(new ErrorResponse("El autor no existe en la bd con este id " + req.params.id, 404));
        }

        res.status(200).json(autor);
    }catch(err){
        next(new ErrorResponse("El autor no existe con este id " + req.params.id, 404));
    }
};

exports.updateAutor = async (req, res, next) => {

    try{
        const autor = await Autor.findByIdAndUpdate(req.params.id, req.body);

        if(!autor){
            return res.status(400).json({status:400})
        }

        res.status(200).json({status:200, data: autor});

    }catch(err){
        res.status(400).json({status:400, mensaje: err})
    }
};

exports.deleteAutor = async (req, res, next) => {

    try{
        const autor = await Autor.findByIdAndDelete(req.params.id);

        if(!autor){
            return res.status(400).json({status:400})
        }

        res.status(200).json({status:200});

    }catch(err){
        res.status(400).json({status:400, mensaje: err})
    }
};


