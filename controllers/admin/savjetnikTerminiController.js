const mongojs = require('mongojs');
const db = mongojs('fullapp', ['termini']);

const savjetnikTerminiController = (req, res) => {

    let savjetnik = req.params.name;
    let user = req.session.user;
    // debug
    console.log(savjetnik);

    db.termini.find({ savjetnik: savjetnik }, (err, termini) => {
        // ispisuje u konzoli sve termine odredjenog savjetnika
        console.log(termini);
        res.render('admin/savjetnikTermini', {
            name: user,
            savjetnik: savjetnik,
            termini: termini
        });
    })
}

module.exports = savjetnikTerminiController;