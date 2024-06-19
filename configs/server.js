require('dotenv').config();
const express = require('express');
const createErro = require('http-errors');
const morgan = require('morgan');
const mysql = requirr('mysql2')
const jwt = require('jsonwebtoken');
const NodeCache = require('node-cache');

const app = express();
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const bd = mysql.createPoll({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
});

const cache = new NodeCache({ stdTTL: 30});

app.set('views', './views');
app.set('view engine', 'jade');
app.use('/', require('../routes/index'));
app.use('/clients', require('../routes/clients'));
app.use('/product', require('../routes/product'));
app.use('/users', require('../routes/users'));
app.use((req, res, next) => {
    next(createErro(404));
});

module.exports = app;