const express = require('express');
const router = express.Router();

// stavljamo samo kosu crtu jer se podrazumijeva da je admin, jer se nalazimo u tom fajlu
router.get('/', require('../controllers/admin/adminController'));

router.get('/create', (req, res) => {
    res.render('admin/adminCreateForm');
});

router.get('/create/grad', (req, res) => {
    res.render('admin/createGrad');
})

router.get('/create/proizvod', (req, res) => {
    res.render('admin/createProizvod');
})

// zahtjevamo kontrolere
router.post('/create/save', require('../controllers/admin/saveController'));

router.post('/create/grad/save', require('../controllers/admin/gradController'));

router.post('/create/proizvod/save', require('../controllers/admin/proizvodController'));

module.exports = router;
