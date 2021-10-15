const express = require('express');
const route = express.Router();

route.get('/', (req, res) => {
    res.status(200).json({ status:200, mensaje: 'Se proceso correctamente' });
});

route.get('/:id', (req, res) => {
    res.status(200).json({ status:200, mensaje: 'Se devuelve el libro por id' });
});

route.post('/', (req, res) => {
    res.status(200).json({ status:200, mensaje: 'Se ha creado eñ libro correctamente' });
});

route.put('/:id', (req, res) => {
    res.status(200).json({ status:200, mensaje: 'Se actualizo el libro' });
});

route.delete('/:id', (req, res) => {
    res.status(200).json({ status:200, mensaje: 'Se elimino el libro' });
});

module.exports = route;