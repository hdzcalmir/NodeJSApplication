const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    // res.send('Odjava');

    // unistava se sesija i vraca nas na login stranicu
    req.session.destroy((err) => {
        res.redirect('/');
    });
});

module.exports = router;