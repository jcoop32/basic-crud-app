const Cars = require('../models/car');

module.exports = {
  index,
  new: newCar,
  create,
  edit,
  update,
};

async function update(req, res) {
  try {
    await Cars.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.redirect(`/cars`);
  } catch (err) {
    res.render(`/cars/${req.params.id}/edit`, { errorMsg: err.message });
  }
}

function edit(req, res) {
  // const id = Cars.findById(req.params.id);
  // const currentCar = Cars.find(car => car.id === id);
  Cars.findById(req.params.id).then((currentCar) => {
    res.render('cars/edit', { car: currentCar, title: 'Edit' });
  });
}

async function create(req, res) {
  //removes empty strings from form for default value
  for (let key in req.body) {
    if (req.body[key] === '') delete req.body[key];
  }
  try {
    await Cars.create(req.body);
    res.redirect('/cars');
  } catch (err) {
    console.log(err);
  }
}

function newCar(req, res) {
  res.render('cars/new', {
    title: 'New car',
  });
}

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
