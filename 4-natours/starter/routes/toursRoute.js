const express = require('express');
const {
  getAllTours,
  createTour,
  getTour,
  updateTour,
  deleteTour,
} = require('../controllers/toursController');
const router = express.Router();

router.route('/').get(getAllTours).post(createTour);
router.route('/:id').patch(updateTour).delete(deleteTour).get(getTour);

module.exports = router;
