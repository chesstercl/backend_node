const dotenv = require('dotenv');
const express = require('express');
const morgan = require('morgan')
const connectDatabase = require('./config/db');

dotenv.config({path: './config/config.env'});
connectDatabase();

const libro = require('./routes/libro');

const app = express();

if(process.env.NODE_ENV === 'development'){
    app.use(morgan('dev'));
}

app.use('/api/Libro', libro);

const PORT = process.env.PORT || 5000

app.listen(PORT, console.log('Servidor se ejecuto en ambiente', process.env.NODE_ENV));