const express = require("express");
const route = express.Router();

const { login, getUsuario, registrarUsuario } = require('../controllers/usuario');


route.get('/', getUsuario);
route.post('/registrar', registrarUsuario);
route.post('/login', login);

module.exports = route;