const mongojs = require('mongojs');
const db = mongojs('fullapp', ['users', 'gradovi']);

const gradController = (req, res) => {
    // dodaj grad
    let grad = req.body.grad;
    let postanskiBroj = req.body.postanskiBroj;

    db.gradovi.insert(
        {
            imeGrada: grad,
            postanskiBroj: postanskiBroj
        }, (err, docs) => {
            if (err) {
                // izbaci error page
            } else {
                // ispisuje sta je ubaceno u db
                // console.log(docs);
                res.redirect('/admin');
            }
        })
    // console.log(grad, postanskiBroj);
}


module.exports = gradController;