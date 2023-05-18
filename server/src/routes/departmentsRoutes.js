const { Router } = require('express');
const DepartmentsController = require('../controllers/DepartmentsController');
const router = Router();

router
    .get('/departamentos', DepartmentsController.getAllDeparts);

module.exports = router;