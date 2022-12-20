const mongojs = require('mongojs');
const db = mongojs('fullapp', ['users']);

const deleteController = (req, res) => {
    // getamo userId iz linka koji smo poslali
    // ajaxom iz adminDashboard
    let userId = req.params.userId;

    // ne mozemo direktno uzeti id nego moramo koristiti
    // mongojs.ObjectID
    db.users.remove({ _id: mongojs.ObjectID(userId) }, (err, docs) => {
        // jer ide preko ajaxa mi nemamo potrebu
        // da vracam err ili docs
        res.send('Ok');
    });
}

module.exports = deleteController;