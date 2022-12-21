const mongojs = require('mongojs');
const db = mongojs('fullapp', ['users', 'gradovi', 'proizvodi']);

const operaterController = (req, res) => {

    // getamo usera iz same sesije, odnosno u varijabli
    // user imamo objekat sa svim podacima od logovanog
    // usera
    let user = req.session.user;
    // nakon prijave nekog operatera renderuje mu se
    // stranica index koja se nalazi u views/operater/index
    res.render('operater/index', {
        // poslali smo ispod navedene podatke
        // index.ejs stranici unutar views/operater
        // te iste mozemo prikazati u bilo kom trenutku
        // pomocu ejs tagova
        name: user.firstname
    });

}

module.exports = operaterController;