const express = require('express');
const router = express.Router();
const JobController = require('../controllers/JobController');


router.post('/add', JobController.createJob);
router.get('/', JobController.getAllJobs);
router.get('/sorted-title-ascending', JobController.getAllJobsOrderedByTitle);
router.delete('/:id', JobController.removeJob);
router.get('/:id', JobController.getJobById);
router.put('/:id', JobController.updateJob);

module.exports = router;

