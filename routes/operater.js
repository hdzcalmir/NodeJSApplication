const express = require('express');
const router = express.Router();


router.get('/', require('../controllers/operater/operaterController'));

// kod ovakvih fajlova u node aplikaciji uvijek
// exportamo router
module.exports = router;
