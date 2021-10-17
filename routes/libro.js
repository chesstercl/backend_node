const express = require('express');
const route = express.Router();

const { 
    getLibro, 
    getLibros, 
    postLibro, 
    putLibro, 
    deleteLibro,
    pagination
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

route
    .route('/pagination')
    .post(pagination)

module.exports = route;