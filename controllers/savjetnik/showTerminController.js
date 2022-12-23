const mongjos = require('mongojs');
const db = mongjos('fullapp', ['termini']);

const showTerminController = (req, res) => {

    let user = req.session.user;
    let id = req.params.id;

    db.termini.find({ _id: mongjos.ObjectID(id) }, (err, termin) => {
        res.render('savjetnik/termin', {
            name: user.firstname,
            // termin iako je jedan idalje je arraay tako da moramo izvuci prvi
            termin: termin[0]
        });
    })

}

module.exports = showTerminController;