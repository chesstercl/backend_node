const dotenv = require('dotenv');
const express = require('express');
const morgan = require('morgan')
const connectDatabase = require('./config/db');

dotenv.config({path: './config/config.env'});
connectDatabase();

const libro = require('./routes/libro');
const autor = require('./routes/autor');

const app = express();
app.use(express.json());

if(process.env.NODE_ENV === 'development'){
    app.use(morgan('dev'));
}

app.use('/api/Libro', libro);
app.use('/api/Autor', autor);

const PORT = process.env.PORT || 5000

const server = app.listen(
    PORT, 
    console.log('Servidor se ejecuto en ambiente', process.env.NODE_ENV)
);

process.on('unhandledRejection', (err, promise) => {
    console.log('Errores', err.message);
    server.close(() => process.exit(1));
});