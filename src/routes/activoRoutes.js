const express = require('express');
const router = express.Router();
const activoController = require('../controllers/activoController');

router.post('/', activoController.createActivo);
router.get('/', activoController.getActivos);
router.get('/:id', activoController.getActivoById);
router.put('/:id', activoController.updateActivo);
router.delete('/:id', activoController.deleteActivo);

module.exports = router;