const Libro = require("../models/Libro");
const ErrorResponse = require("../helper/errorResponse");

exports.getLibros = async (req, res, next) => {
  try {
    const libros = await Libro.find();

    res.status(200).json(libros);
  } catch (err) {
    next(
      new ErrorResponse("No se pudo procesar el request" + err.message, 400)
    );
  }
};

exports.getLibro = async (req, res, next) => {
  try {
    const libro = await Libro.findById(req.params.id);

    if (!libro) {
      return next(new ErrorResponse("No se pudo procesar el request", 400));
    }
    res.status(200).json(libros);
  } catch (err) {
    next(
      new ErrorResponse("No se pudo procesar el request" + err.message, 400)
    );
  }
};

exports.postLibro = async (req, res, next) => {
  try {
    const libro = await Libro.create(req.body);

    res.status(200).json({
      status: 200,
      data: libro,
    });

    if (!libro) {
      return next(
        new ErrorResponse("No se pudo procesar el request" + err.message, 400)
      );
    }
  } catch (err) {
    next(
      new ErrorResponse("No se pudo procesar el request" + err.message, 400)
    );
  }
};

exports.putLibro = async (req, res, next) => {
  try {
    const libro = await Libro.findByIdAndUpdate(req.params.id, req.body);

    res.status(200).json({
      status: 200,
      data: libro,
    });
  } catch (err) {
    next(
      new ErrorResponse("No se pudo procesar el request" + err.message, 400)
    );
  }
};

exports.deleteLibro = async (req, res, next) => {
  try {
    const libro = await Libro.findByIdAndDelete(req.params.id);

    if (!libro) {
      return next(new ErrorResponse("EL libro no existe", 400));
    }

    res.status(200).json({
      status: 200,
      data: libro,
    });
  } catch (err) {
    next(
      new ErrorResponse("No se pudo procesar el request" + err.message, 400)
    );
  }
};

exports.pagination = async (req, res, next) => {
  try {
    const sort = req.body.sort;
    const sortDirection = req.body.sortDirection;
    const page = parseInt(req.body.page);
    const pageSize = parseInt(req.body.pageSize);

    let filterValor = "";
    let filterPropiedad = "";

    let libros = [];
    let totalRows = 0;

    if (req.body.filterValue) {
      filterValor = req.body.filterValue;
      filterPropiedad = req.body.filterValue.propiedad;

      libros = await Libro.find({
        [filterPropiedad]: new RegExp(filterValor, "i"),
      })
        .sort({ [sort]: sortDirection })
        .skip((page - 1) * pageSize)
        .limit(pageSize);

      totalRows = await Libro.find({
        [filterPropiedad]: new RegExp(filterValor, "i"),
      }).count();
    } else {
      libros = await Libro.find()
        .sort({ [sort]: sortDirection })
        .skip((page - 1) * pageSize)
        .limit(pageSize);

      totalRows = await Libro.find().count();
    }

    const pagesQuantity = Math.ceil(totalRows / pageSize);

    res.status(200).json({
      status: 200,
      pageSize,
      page,
      sort,
      sortDirection,
      pagesQuantity,
      totalRows,
      data: libros,
    });
  } catch (err) {
    next(
      new ErrorResponse("No se pudo procesar el request" + err.message, 400)
    );
  }
};
