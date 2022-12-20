const express = require('express');
const router = express.Router();

// middleware, to znaci da ce se funkcija checkAdmin pokrenuti na svaku
// od ovih routes
router.use(checkAdmin);

// stavljamo samo kosu crtu jer se podrazumijeva da je admin, jer se nalazimo u tom fajlu
router.get('/', require('../controllers/admin/adminController'));

router.get('/create', (req, res) => {
    res.render('admin/adminCreateForm');
});

router.get('/create/grad', (req, res) => {
    res.render('admin/createGrad');
});

router.get('/create/proizvod', (req, res) => {
    res.render('admin/createProizvod');
});

// preko userId zapravo uzimamo id usera koji smo poslali ajaxom
// kojeg zelimo obrisati
router.get('/delete/user/:userId', require('../controllers/admin/deleteController'));
router.get('/delete/city/:cityId', require('../controllers/admin/deleteCityController'));
router.get('/delete/product/:productId', require('../controllers/admin/deleteProductController'));

// zahtjevamo kontrolere
router.post('/create/save', require('../controllers/admin/saveController'));

router.post('/create/grad/save', require('../controllers/admin/gradController'));

router.post('/create/proizvod/save', require('../controllers/admin/proizvodController'));


function checkAdmin(req, res, next) {
    // iz sesije uzimamo trenutacno logovanog usera
    let user = req.session.user;
    if (user) {
        if (user.role == 'admin') {
            // u slucaju da je user admin dalje ce slijediti nas kontroler
            // tome i sluzi next();
            next();
        } else {
            // u slusaju da user nije admin pristup admin starnici mu nece
            // biti omogucen
            res.redirect('/')
        }
    } else {
        // vraca korisnika na login koji je htio da bez logovanja udje
        // na specificnu stranicu
        res.redirect('/');
    }

}

module.exports = router;
