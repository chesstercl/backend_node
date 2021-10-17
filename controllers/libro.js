const Libro = require('../models/Libro');
const ErrorResponse = require("../helper/errorResponse");

exports.getLibros = async (req, res, next) => {
    try{
        const libros = await Libro.find();

        res.status(200).json(libros)

    }catch(err){
        next(new ErrorResponse('No se pudo procesar el request' + err.message, 400));
    }
}

exports.getLibro = async (req, res, next) => {
    try{
        const libro = await Libro.findById(req.params.id);

        if(!libro){
            return next(
                new ErrorResponse('No se pudo procesar el request', 400)
                );
        }
        res.status(200).json(libros)

    }catch(err){
        next(new ErrorResponse('No se pudo procesar el request' + err.message, 400));
    }
    
}

exports.postLibro = async (req, res, next) => {
    try{
        const libro = await Libro.create(req.body);

        res.status(200).json({
            status: 200,
            data: libro
        });

        if(!libro){
            return next(
                new ErrorResponse('No se pudo procesar el request' + err.message, 400)
            );
        }
    }catch(err){
        next(new ErrorResponse('No se pudo procesar el request' + err.message, 400));
    }
}

exports.putLibro = async (req, res, next) => {
    try{
        const libro = await Libro.findByIdAndUpdate(req.params.id, req.body);

        res.status(200).json({
            status: 200,
            data: libro
        });

    }catch(err){
        next(new ErrorResponse('No se pudo procesar el request' + err.message, 400));
    }
}

exports.deleteLibro = async (req, res, next) => {
    try{
        const libro = await Libro.findByIdAndDelete(req.params.id);

        if(!libro){
            return next(
                new ErrorResponse('EL libro no existe', 400)
            );
        }

        res.status(200).json({
            status: 200,
            data: libro
        });

    }catch(err){
        next(new ErrorResponse('No se pudo procesar el request' + err.message, 400));
    }
}

