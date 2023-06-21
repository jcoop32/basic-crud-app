var express = require('express');
var router = express.Router();

const carsCtrl = require('../controllers/cars');

/* GET users listing. */
router.get('/', carsCtrl.index);

router.get('/new', carsCtrl.new);

// router.post('/', carsCtrl.create);

module.exports = router;
