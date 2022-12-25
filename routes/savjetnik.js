const express = require('express');
const router = express.Router();

// console.log('Radi'); DEBUG 

// govorimo routeru da koristi checkSavjetnik middleware
router.use(checkSavjetnik);

router.get('/', require('../controllers/savjetnik/savjetnikController'));

router.get('/termin/:id', require('../controllers/savjetnik/showTerminController'));

router.post('/izvjestaj/:id', require('../controllers/savjetnik/izvjestajController'));


function checkSavjetnik(req, res, next) {
    let user = req.session.user;
    if (user) {
        if (req.session.user.role == 'savjetnik') {
            // u slucaju da je user admin dalje ce slijediti nas kontroler
            // tome i sluzi next();
            next();
        } else {
            // u slucaju da user nije admin pristup admin starnici mu nece
            // biti omogucen
            res.redirect('/');
        }
    } else {
        // vraca korisnika na login koji je htio da bez logovanja udje
        // na specificnu stranicu
        res.redirect('/');
    }
}

module.exports = router;