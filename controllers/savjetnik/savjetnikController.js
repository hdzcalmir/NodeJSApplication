const mongojs = require('mongojs');
const db = mongojs('fullapp', ['termini']);

function savjetnikController(req, res) {
    let user = req.session.user;

    // saljemo query u db, koji nam vraca termine aktivnog
    // savjetnika i zatim renderuje stranicu savjetnik/index kojoj
    // prosljeđuje podatke name - uzima iz sesije, termini
    db.termini.find({ savjetnik: user.firstname + ' ' + user.lastName, active: true }, (err, termini) => {
        res.render('savjetnik/index', {
            name: user.firstname,
            termini: termini
        });
    });

    // console.log(user); DEBUG

    // na ovaj nacin prosljedujemo zeljene podatke
    // u index
    // res.render('savjetnik/index', {
    //     name: user.firstname,
    //     termini: termini,


    // });

}

module.exports = savjetnikController;