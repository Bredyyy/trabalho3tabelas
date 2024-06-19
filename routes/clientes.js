const express = require('express');
const router = express.Router();
/* GET clientes*/
router.get('/', function (req, res, next) {
 res.send('GET clientes');
});
/* POST clientes*/
router.post('/', function (req, res, next) {
 res.send('POST clientes');
});

/* PUT clientes*/
router.put('/', function (req, res, next) {
    res.send('PUT clientes');
   });
   /* DELETE clientes*/
   router.delete('/', function (req, res, next) {
    res.send('DELETE clientes');
   });
   
   module.exports = router;

   const express = require('express');
const roouter = express.Router();
const clienteController =
require('../controllers/clientesController');
/* GET clientes*/
roouter.get('/', clienteController.findAll);
/* POST clientes*/
roouter.post('/', clienteController.save);
/* PUT clientes*/
roouter.put('/', clienteController.update);
/* DELETE clientes*/
roouter.delete('/:id', clienteController.remove);
module.exports = roouter;