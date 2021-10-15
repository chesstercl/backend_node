const dotenv = require('dotenv');
const express = require('express');

const libro = require('./routes/libro');

dotenv.config({path: './config/config.env'});

const app = express();

app.use('/api/Libro', libro);

const PORT = process.env.PORT || 5000

app.listen(PORT, console.log('Servidor se ejecuto en ambiente', process.env.NODE_ENV));