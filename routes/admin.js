const express = require('express');
const router = express.Router();

// stavljamo samo kosu crtu jer se podrazumijeva da je admin, jer se nalazimo u tom fajlu
router.get('/', require('../controllers/admin/adminController'));

module.exports = router;
