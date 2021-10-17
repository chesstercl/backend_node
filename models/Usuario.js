const mongoose = require('mongoose');

const UsuarioSchema = new mongoose.Schema({
    nombre: {
        type: String,
        required: [true, 'Por favor ingrese un nombre']
    },
    apellido: {
        type: String,
        required: [true, 'Por favor ingrese un apellido']
    },
    userName: {
        type: String,
        required: [true, 'Por favor ingrese un username']
    },
    email: {
        type: String,
        required: [true, 'Por favor ingrese un email'],
        unique: true,
        match: [
            /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
            'Ingrese un email valido'
        ]
    },
    password: {
        type: String,
        required: [true, 'Por favor ingrese un password'],
        minlength: 6,
        select: false
    }
});

module.exports = mongoose.model('Usuario', UsuarioSchema);