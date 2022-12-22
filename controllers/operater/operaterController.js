const mongojs = require('mongojs');
const db = mongojs('fullapp', ['users', 'gradovi', 'proizvodi']);

const operaterController = (req, res) => {

    // getamo usera iz same sesije, odnosno u varijabli
    // user imamo objekat sa svim podacima od logovanog
    // usera
    let user = req.session.user;

    // ovo sve spremamo i saljemo u index.ejs operatera

    // ({}) - ovo nam vraca ili brise sve
    db.gradovi.find({}, (err, gradovi) => {
        db.users.find({ role: 'savjetnik' }, (err, savjetnici) => {
            db.termini.find({ operater: user.firstname + ' ' + user.lastName }, (err, termini) => {
                res.render('operater/index', {
                    name: user.firstname,
                    savjetnici: savjetnici,
                    gradovi: gradovi,
                    // vracamo length arraya
                    brojTermina: termini.length
                });
            })
        })
    })


    // nakon prijave nekog operatera renderuje mu se
    // stranica index koja se nalazi u views/operater/index
    // res.render('operater/index', {
    //     // poslali smo ispod navedene podatke
    //     // index.ejs stranici unutar views/operater
    //     // te iste mozemo prikazati u bilo kom trenutku
    //     // pomocu ejs tagova
    //     name: user.firstname,
    //     savjetnici: savjetnici,
    //     gradovi: gradovi,
    //     brojTermina: brojTermina
    // });

}

module.exports = operaterController;