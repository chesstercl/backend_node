const express = require("express");
const route = express.Router();
const {security} = require('../middleware/security');

const { login, getUsuario, registrarUsuario } = require('../controllers/usuario');


route.get('/', security, getUsuario);
route.post('/registrar', registrarUsuario);
route.post('/login', login);

module.exports = route;