const mongojs = require('mongojs');
const db = mongojs('fullapp', ['termini']);


function newTerminController(req, res) {

    let operater = req.session.user;

    db.termini.insert({
        imeStranke: req.body.imeStranke,
        prezimeStranke: req.body.prezimeStranke,
        godisteStranke: req.body.godisteStranke,
        imeSupruznika: req.body.imeSupruznika,
        prezimeSupruznika: req.body.prezimeStranke,
        godisteSupruznika: req.body.godisteSupruznika,
        fiksniTelefon: req.body.fiksniTelefon,
        mobilniTelefon: req.body.mobilniTelefon,
        adresa: req.body.adresa,
        datumZakazivanja: req.body.datumZakazivanja,
        vrijemeTermina: req.body.vrijemeTermina,
        savjetnik: req.body.savjetnik,
        grad: req.body.grad,
        djeca: req.body.djeca,
        operacije: req.body.operacije,
        terapija: req.body.terapija,
        napomena: req.body.napomena,
        active: true,
        vrijednostUgovora: 0,
        razlog: "",
        ulaz: false,
        proizvod: "",
        operater: operater.firstname + ' ' + operater.lastName
    }, (err, docs) => {
        res.redirect('/operater');
    })

}

module.exports = newTerminController;