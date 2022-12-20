const mongojs = require('mongojs');
// ime baze i kolekcija
const db = mongojs('fullapp', ['users', 'gradovi', 'proizvodi']);

const adminController = (req, res) => {
    // request smo sesiju
    let user = req.session.user;
    db.users.find({}, (err, users) => {
        db.proizvodi.find({}, (err, proizvodi) => {
            db.gradovi.find({}, (err, gradovi) => {

                let operateri = users.filter(user => user.role == 'operater');
                let savjetnici = users.filter(user => user.role == 'savjetnik');
                //
                res.render('admin/adminDashboard', {
                    name: user.firstname,
                    gradovi: gradovi,
                    proizvodi: proizvodi,
                    operateri: operateri,
                    savjetnici: savjetnici
                });
            })
        })
    })
    // renderujemo stranicu 
    // res.render('admin/adminDashboard');
}


module.exports = adminController;