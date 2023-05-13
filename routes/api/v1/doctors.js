const express= require('express');
const router = express.Router();
const doctorController = require('../../../controllers/api/v1/doctor_controller');

//http://localhost:5000/api/v1/doctors/reqister
router.post('/register', doctorController.register);
router.post('/login', doctorController.login);

module.exports = router;