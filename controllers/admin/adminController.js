const mongojs = require('mongojs');
// ime baze i kolekcija
const db = mongojs('fullapp', ['users']);

const adminController = (req, res) => {
    // renderujemo stranicu 
    res.render('admin/adminDashboard');
}


module.exports = adminController;