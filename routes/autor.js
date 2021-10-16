const {Router} = require("express");
const express = require("express");
const route = express.Router();

const { postAutor } = require('../controllers/autor');

route.route("/").post(postAutor);

module.exports =  route;