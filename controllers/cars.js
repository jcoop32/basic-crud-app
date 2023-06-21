const Cars = require('../models/car');

module.exports = {
  index,
  new: newCar,
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

function newCar(req, res) {
  res.render('cars/new', {
    title: 'New car',
  });
}
