const {Router} = require("express");
const express = require("express");
const route = express.Router();

const { postAutor, getAutor, getAutores } = require('../controllers/autor');

route.route("/")
        .post(postAutor)
        .get(getAutores)

route.route("/:id")
        .get(getAutor)

module.exports =  route;