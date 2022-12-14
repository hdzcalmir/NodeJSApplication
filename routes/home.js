const express = require('express');
const router = express.Router();


router.get('/', (req, res) => {
    // po defaultu trazit ce ovaj fajl u views
    res.render('index');
});


module.exports = router;