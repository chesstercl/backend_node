const dotenv = require('dotenv');
const express = require('express');

const libro = require('./routes/libro');

dotenv.config({path: './config/config.env'});

const app = express();

const loger = (req, res, next) => {
    console.log('Este request esta pasando por el middleware');
    next();
}

app.use(loger);

app.use('/api/Libro', libro);

const PORT = process.env.PORT || 5000

app.listen(PORT, console.log('Servidor se ejecuto en ambiente', process.env.NODE_ENV));