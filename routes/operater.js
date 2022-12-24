const express = require('express');
const router = express.Router();



// middleware
router.use(checkOperater);

router.get('/', require('../controllers/operater/operaterController'));

router.post('/newTermin', require('../controllers/operater/newTerminController'));


function checkOperater(req, res, next) {
    let user = req.session.user;
    if (user) {
        if (req.session.user.role == 'operater') {
            // u slucaju da je user admin dalje ce slijediti nas kontroler
            // tome i sluzi next();
            next();
        } else {
            // u slusaju da user nije admin pristup admin starnici mu nece
            // biti omogucen
            res.redirect('/');
        }
    } else {
        // vraca korisnika na login koji je htio da bez logovanja udje
        // na specificnu stranicu
        res.redirect('/');
    }
}

// kod ovakvih fajlova u node aplikaciji uvijek
// exportamo router
module.exports = router;
