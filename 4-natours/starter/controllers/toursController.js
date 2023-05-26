const fs = require('fs');
const path = `${__dirname}/../dev-data/data/tours-simple.json`;
console.log('my path', path);
const tours = JSON.parse(fs.readFileSync(path));
exports.getAllTours = (req, res) => {
  console.log('Received');
  res.status(200).json({
    status: 'success',
    results: tours.length,
    data: {
      tours,
    },
  });
};
exports.getTour = (req, res) => {
  const id = req.params.id * 1;
  const tour = tours.find((el) => el.id === id);
  if (!tour || id > tours.length)
    res.status(404).json({
      status: 'fail',
      message: 'Invalid ID',
    });

  res.status(200).json({
    status: 'success',
    data: {
      tour: tour,
    },
  });
};
exports.createTour = (req, res) => {
  const newId = tours[tours.length - 1].id + 1;
  const newTour = Object.assign({ id: newId }, req.body);
  tours.push(newTour);
  fs.writeFile(
    `${__dirname}/4-natours/starter/dev-data/data/tours-simple.json`,
    JSON.stringify(tours),
    (err) => {
      if (err) {
        console.log(err);
      }
      res.status(201).json({
        status: 'success',
        data: {
          tour: newTour,
        },
      });
    }
  );
};
exports.updateTour = (req, res) => {
  const id = req.params.id * 1;
  let tour = tours.find((el) => el.id === id);

  if (!tour || id > tours.length)
    res.status(404).json({
      status: 'fail',
      message: 'Invalid ID',
    });
  const body = req.body;
  tour = Object.assign(tour, body);
  console.log(tour);
  res.status(200).json({
    status: 'success',
    data: {
      message: 'Updated',
    },
  });
};
exports.deleteTour = (req, res) => {
  const id = req.params.id * 1;
  let tour = tours.find((el) => el.id === id);

  if (!tour || id > tours.length)
    res.status(404).json({
      status: 'fail',
      message: 'Invalid ID',
    });
  const newTours = tours.filter((el) => el.id !== id);
  tour = Object.assign(newTours);
  console.log(tour);
  res.status(204).json({
    status: 'success',
    data: {
      message: 'Deleted',
    },
  });
};
