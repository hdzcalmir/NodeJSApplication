const mongojs = require('mongojs');
const db = mongojs('fullapp', ['users']);

const loginController = (req, res) => {

    // console.log('Radi');
    // res.send('Radi');

    // PREUZETI PODATKE, podaci su u req.body
    let imeIzForme = req.body.ime;
    let lozinkaIzForme = req.body.lozinka;
    // console.log(lozinkaIzForme, imeIzForme);
    db.users.find({ firstname: imeIzForme, password: lozinkaIzForme }, (err, docs) => {
        if (err) {
            console.log('Greska');
            res.redirect('/');
        } else {
            // pronadjenih korisnika jednako broju jedan
            if (docs.length === 1) {
                let user = docs[0];
                // setali smo sesiju
                req.session.user = user;
                if (user.role == 'admin') {
                    res.redirect('/admin');
                } else if (user.role == 'operater') {
                    res.redirect('/operater');
                } else {
                    res.redirect('/');
                }
            } else {
                // podaci nisu tacni
                res.redirect('/');
            }
        }
    })

}


module.exports = loginController;