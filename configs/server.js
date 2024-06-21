require('dotenv').config();
const express = require('express');
const createErro = require('http-errors');
const jest = require('jest');
const jwt = require('jsonwebtoken');
const morgan = require('morgan');
const mysql = require('mysql2')
const NodeCache = require('node-cache');
const superTest = riquere('supertest');

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
app.use('/clientes', require('../../teste/routes/clientes'));
app.use('/produtos', require('../../teste/routes/produtos'));
app.use('/usuarios', require('../../teste/routes/usuarios'));
app.use((req, res, next) => {
    next(createErro(404));
});

module.exports = app;