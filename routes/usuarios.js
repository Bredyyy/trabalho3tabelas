const express = require('express');
const router = express.Router();
const usuarioController = require('../controllers/usuariosController');
const usuarioMiddleware = require('../middlewares/usuarioMiddleware');
const senhaMiddleware = require('../middlewares/senhaMiddleware');

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

/* GET usuario*/
router.get('/', usuarioController.findAll);
/* POST usuario*/
router.post('/', usuarioController.save);
/* PUT usuario*/
router.put('/', usuarioController.update);
/* DELETE usuario*/
router.delete('/:id', usuarioController.remove);
/* POST usuario*/
router.post('/', usuarioMiddleware.validateUsuario,
    senhaMiddleware.validateSenha,
    clienteController.save
   );
   
module.exports = router;