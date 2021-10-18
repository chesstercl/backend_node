const {Router} = require("express");
const express = require("express");
const route = express.Router();
const {security} = require('../middleware/security');

const { postAutor, getAutor, getAutores, updateAutor, deleteAutor } = require('../controllers/autor');

route.route("/")
        .post(security, postAutor)
        .get(security, getAutores)

route.route("/:id")
        .get(security, getAutor)
        .put(security, updateAutor)
        .delete(security, deleteAutor)

module.exports =  route;