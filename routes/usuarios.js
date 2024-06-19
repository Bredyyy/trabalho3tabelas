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