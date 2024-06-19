const express = require('express');
const router = express.Router();
/* GET usuarios*/
router.get('/', function (req, res, next) {
 res.send('GET usuarios');
});
/* POST usuarios*/
router.post('/', function (req, res, next) {
 res.send('POST usuarios');
});

/* PUT usuarios*/
router.put('/', function (req, res, next) {
    res.send('PUT usuarios');
   });
   /* DELETE usuarios*/
   router.delete('/', function (req, res, next) {
    res.send('DELETE usuarios');
   });
   
   module.exports = router;

   const express = require('express');
const roouter = express.Router();
const usuarioController =
require('../controllers/usuariosController');
/* GET clientes*/
roouter.get('/', usuarioController.findAll);
/* POST clientes*/
roouter.post('/', clienteController.save);
/* PUT clientes*/
roouter.put('/', clienteController.update);
/* DELETE clientes*/
roouter.delete('/:id', clienteController.remove);
module.exports = roouter;