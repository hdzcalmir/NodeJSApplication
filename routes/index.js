const express = require('express');
const router = express.Router();


router.use('/', require('./home'));

router.use('/login', require('../controllers/loginController'));


// router.use('/admin', (req, res) => {
//     console.log(req.session.user);
//     // u terminalu ce nam ispisat detalje sesije
//     // a ove informacije mozemo da dobijemo kada god zelimo

//     res.send('Admin panel');
// })
router.use('/admin', require('./admin'));

// kada se operater logina koristi se route /operater
router.use('/operater', require('./operater'));

// kada se logina savjetnik koristi se route /savjetnik
router.use('/savjetnik', require('./savjetnik'));

// router za odjavu, koji geta fajl iz require patha
router.use('/logout', require('./logout'));


module.exports = router;