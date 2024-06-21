const express = require('express');
const router = express.Router();
const clienteController = require('../../controllers/clientesController');
const nomeMiddleware = require('../../middlewares/nomeMiddleware');
const sobrenomeMiddleware = require('../../middlewares/sobrenomeMiddleware');
const idadeMiddleware = require('../../middlewares/idadeMiddleware');

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
    
/* GET clientes*/
router.get('/', clienteController.findAll);
/* POST clientes*/
router.post('/', clienteController.save);
/* PUT clientes*/
router.put('/', clienteController.update);
/* DELETE clientes*/
router.delete('/:id', clienteController.remove);
router.post('/', nomeMiddleware.validateName,
    sobrenomeMiddleware.validateFamilyName,
    idadeMiddleware.validateAge,
    clienteController.save
);

module.exports = router;