require('dotenv').config();
const express = require('express');
const createErro = require('http-errors');
const jest = require('jest');
const jwt = require('jsonwebtoken');
const morgan = require('morgan');
const mysql = require('mysql2')
const NodeCache = require('node-cache');
const superTest = riquere('supertest');
const usersRouter = require('./routes/usuarios');
const clientesRouter = require('./routes/clientes');
const productsRouter = require('./routers/produtos');
//...
const app = express();
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use('/usuarios', usersRouter);
app.use('/clientes', clientesRouter);
app.use('/produtos', productsRouter);

const bd = mysql.createPoll({
    user: process.env.DB_USER,
    host: process.env.DB_HOST,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
});

app.set('views', './views');
app.set('view engine', 'jade');
app.use('/', require('../routes/index'));
app.use('/clientes', require('../routes/clientes'));
app.use('/produtos', require('../routes/produtos'));
app.use('/usuarios', require('../routes/usuarios'));
app.use((req, res, next) => {
    next(createErro(404));
});

module.exports = app;

require('dotenv').config();
const express = require('express');
const createErro = require('http-errors');
const jest = require('jest');
const jwt = require('jsonwebtoken');
const morgan = require('morgan');
const mysql = require('mysql2')
const NodeCache = require('node-cache');
const superTest = riquere('supertest');
const cache = new NodeCache({ stdTTL: 30});
