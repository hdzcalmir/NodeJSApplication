const mongojs = require('mongojs');
const db = mongojs('fullapp', ['termini']);

function savjetnikController(req, res) {
    let user = req.session.user;

    // console.log(user); DEBUG

    // na ovaj nacin prosljedujemo zeljene podatke
    // u index
    res.render('savjetnik/index', {
        user: user
    });

}

module.exports = savjetnikController;