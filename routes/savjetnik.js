const express = require('express');
const router = express.Router();

// console.log('Radi'); DEBUG 

router.get('/', require('../controllers/savjetnik/savjetnikController'));

module.exports = router;