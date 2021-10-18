const Usuario = require("../models/Usuario");
const ErrorResponse = require("../helper/errorResponse");

exports.registrarUsuario = async (req, res, next) => {
  try {
    const { nombre, apellido, username, email, password } = req.body;
    const usuarioBD = await Usuario.create({
      nombre,
      apellido,
      userName: username,
      email,
      password,
    });

    const token = usuarioBD.crearJsonWebToken();

    res.status(200).json({
      status: 200,
      id: usuarioBD._id,
      nombre,
      apellido,
      username,
      email,
      token,
    });
  } catch (err) {
    next(new ErrorResponse("Error registrando usuario" + err, 400));
  }
};

exports.login = async (req, res, next) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return next(new ErrorResponse("Ingrese un email y un password", 400));
    }

    const usuario = await Usuario.findOne({ email }).select("+password");

    if (!usuario) {
      return next(
        new ErrorResponse("El usuario no existe en la base de datos", 400)
      );
    }

    const isUsuarioValido = await usuario.validarPassword(password);

    if (!isUsuarioValido) {
      return next(new ErrorResponse("Las credenciales son incorrectas", 400));
    }

    const token = usuario.crearJsonWebToken();

    res.status(200).json({
      status: 200,
      id: usuario._id,
      nombre: usuario.nombre,
      apellido: usuario.apellido,
      username: usuario.username,
      email: usuario.email,
      token,
    });
  } catch (err) {
    next(new ErrorResponse("Error registrando usuario" + err, 400));
  }
};

exports.getUsuario = (req, res, next) => {
  res.status(200).json({ status: 200 });
};
