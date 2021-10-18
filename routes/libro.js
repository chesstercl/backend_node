const {Router} = require("express");
const express = require('express');
const route = express.Router();
const {security} = require('../middleware/security');

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
    .get(security, getLibros)
    .post(security, postLibro)

route
    .route('/:id')
    .get(security, getLibro)
    .put(security, putLibro)
    .delete(security, deleteLibro)

route
    .route('/pagination')
    .post(security, pagination)

module.exports = route;