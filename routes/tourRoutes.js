const express = require('express');
const tourController = require("../controllers/tourControllers")

const {getAllTours, createNewTour, getTour , updateTour , deleteTour , checkID , checkTour} = tourController

const router = express.Router();

router.param("id" , checkID)


router.route('/').get(getAllTours).post(checkTour,createNewTour);
router.route('/:id').get(getTour).patch(updateTour).delete(deleteTour);

module.exports = router;
