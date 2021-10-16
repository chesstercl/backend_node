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
        res.status(200).json(autor);
    }catch(err){
        res.status(400).json({status:400, mensaje: err})
    }
};


