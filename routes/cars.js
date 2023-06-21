var express = require('express');
var router = express.Router();

const carsCtrl = require('../controllers/cars');

/* GET users listing. */
//cars
router.get('/', carsCtrl.index);

router.get('/:id/edit', carsCtrl.edit);

router.put('/:id/edit', carsCtrl.update);

router.get('/new', carsCtrl.new);

router.post('/', carsCtrl.create);

router.delete('/:id', carsCtrl.delete);

module.exports = router;
