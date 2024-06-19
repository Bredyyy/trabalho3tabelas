//...
const usersRouter = require('./routes/usuarios');
const clientesRouter = require('./routes/clientes');
const productsRouter = require('./routers/produtos');
//...
app.use('/usuarios', usersRouter);
app.use('/clientes', clientesRouter);
app.use('/produtos', productsRouter);