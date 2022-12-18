const mongojs = require('mongojs');
const db = mongojs('fullapp', ['users', 'proizvodi']);

const proizvodController = (req, res) => {
    // dodaj novi proizvod
    let proizvod = req.body.proizvod;
    let cijena = req.body.cijena;

    // query u db koji upisuje novi proizvod
    db.proizvodi.insert(
        {
            proizvod: proizvod,
            cijena: cijena
        }, (err, docs) => {
            if (err) {
                // vrati error stranicu
            } else {
                res.redirect('/admin');
                // ispisuje cijeli proizvod / DOCS
                // console.log(docs);
            }
        }
    )
}

module.exports = proizvodController;
