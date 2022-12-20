const mongojs = require('mongojs');
const db = mongojs('fullapp', ['proizvodi']);

const deleteProductController = (req, res) => {

    let productId = req.params.productId;

    db.proizvodi.remove({ _id: mongojs.ObjectID(productId) }, (err, docs) => {
        res.send('productDeleted');
    })

}

module.exports = deleteProductController;