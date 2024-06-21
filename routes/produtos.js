const express = require('express');
const router = express.Router();
const produtosController = require('../../controllers/produtosController');
const nomeMiddleware = require('../../middlewares/nomeMiddleware');
const descricaoMiddleware = require('../../middlewares/descricaoMiddleware');
const precoMiddleware = require('../../middlewares/precoMiddleware');

/* GET produtos*/
router.get('/', function (req, res, next) {
    res.send('GET produtos');
});

/* POST produtos*/
router.post('/', function (req, res, next) {
    res.send('POST produtos');
});

/* PUT produtos*/
router.put('/', function (req, res, next) {
    res.send('PUT produtos');
});
/* DELETE produtos*/
router.delete('/', function (req, res, next) {
    res.send('DELETE produtos');
});
   
   module.exports = router;

/* GET produtos*/
router.get('/', produtosController.findAll);
/* POST produtos*/
router.post('/', produtosController.save);
/* PUT produtos*/
router.put('/', produtosController.update);
/* DELETE produtos*/
router.delete('/:id', produtosController.remove);
/* POST predutos*/
router.post('/', nomeMiddleware.validateName,
    descricaoMiddleware.validateDescricao,
    precoMiddleware.validatePreco,
    produtosController.save
   );
   
module.exports = router;