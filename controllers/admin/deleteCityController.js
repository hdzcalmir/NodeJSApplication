const mongojs = require('mongojs');
const db = mongojs('fullapp', ['proizvodi']);

const deleteCityController = (req, res) => {

    let cityId = req.params.cityId;

    db.gradovi.remove({ _id: mongojs.ObjectID(cityId) }, (err, docs) => {
        res.send('cityDeleted');
    });

}

module.exports = deleteCityController;