exports.getLibros = (req, res, next) => {
    res.status(200).json({ status:200, mensaje: 'Se proceso correctamente' });
}

exports.getLibro = (req, res, next) => {
    res.status(200).json({ status:200, mensaje: 'Se devuelve el libro por id' });
}

exports.postLibro = (req, res, next) => {
    res.status(200).json({ status:200, mensaje: 'Se ha creado el libro correctamente' });
}

exports.putLibro = (req, res, next) => {
    res.status(200).json({ status:200, mensaje: 'Se actualizo el libro' });
}

exports.deleteLibro = (req, res, next) => {
    res.status(200).json({ status:200, mensaje: 'Se elimino el libro' });
}

