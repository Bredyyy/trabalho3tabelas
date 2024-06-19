const express = require('express');
const router = express.Router();
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

   const express = require('express');
const roouter = express.Router();
const produtosController =
require('../controllers/produtosController');
/* GET produtos*/
roouter.get('/', produtosController.findAll);
/* POST produtos*/
roouter.post('/', produtosController.save);
/* PUT produtos*/
roouter.put('/', produtosController.update);
/* DELETE produtos*/
roouter.delete('/:id', produtosController.remove);
module.exports = roouter;