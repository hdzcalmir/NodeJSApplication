const mongojs = require('mongojs');
const db = mongojs('fullapp', ['termini']);

const izvjestajController = (req, res) => {

    let id = req.params.id;

    db.termini.update({ _id: mongojs.ObjectID(id) }, {
        // na ovaj nacin radimo update u mongojs db, jedne ili vise stavki
        $set: {
            active: false
        }
    }, (err, termin) => {
        // provjeriti error
        // nakon odradjenog updejta vraca nam ili error ili u ovom slucaju nas redirecta na /savjetnik, odnosno
        // dashboard savjetnika
        res.redirect('/savjetnik');
    })

}

module.exports = izvjestajController;