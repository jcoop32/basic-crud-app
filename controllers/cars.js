const Cars = require('../models/car');

module.exports = {
  index,
};

async function index(req, res) {
  try {
    const allCars = await Cars.find({});
    res.render('cars/index', {
      cars: allCars,
      title: 'Cars',
    });
  } catch (err) {
    console.log(err);
  }
}
