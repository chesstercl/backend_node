const Usuario = require("../models/Usuario");
const ErrorResponse = require("../helper/errorResponse");

exports.registrarUsuario = async (req, res, next) => {
  try {
    const { nombre, apellido, username, email, password } = req.body;
    await Usuario.create({
      nombre,
      apellido,
      userName: username,
      email,
      password,
    });
    res.status(200).json({status:200});
  } catch (err) {
      next(
          new ErrorResponse("Error registrando usuario" + err, 400)
      )
  }
};

exports.login = (req, res, next) => {
  res.status(200).json({ status: 200 });
};

exports.getUsuario = (req, res, next) => {
  res.status(200).json({ status: 200 });
};
