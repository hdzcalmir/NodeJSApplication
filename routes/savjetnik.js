const express = require('express');
const router = express.Router();

// console.log('Radi'); DEBUG 

router.get('/', require('../controllers/savjetnik/savjetnikController'));

router.get('/termin/:id', require('../controllers/savjetnik/showTerminController'));

router.post('/izvjestaj/:id', require('../controllers/savjetnik/izvjestajController'));

module.exports = router;