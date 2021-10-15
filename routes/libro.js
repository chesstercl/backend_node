const express = require('express');
const route = express.Router();

const { 
    getLibro, 
    getLibros, 
    postLibro, 
    putLibro, 
    deleteLibro,
 } = require('../controllers/libro');

route
    .route('/')
    .get(getLibros)
    .post(postLibro)

route
    .route('/:id')
    .get(getLibro)
    .put(putLibro)
    .delete(deleteLibro)

module.exports = route;