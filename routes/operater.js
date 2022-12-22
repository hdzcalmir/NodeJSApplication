const express = require('express');
const router = express.Router();


router.get('/', require('../controllers/operater/operaterController'));

router.post('/newTermin', require('../controllers/operater/newTerminController'));


// kod ovakvih fajlova u node aplikaciji uvijek
// exportamo router
module.exports = router;
