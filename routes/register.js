var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res) {
    res.render('register');
});

router.post('/', function (req, res) {
    console.log('received post: ');
    console.log(JSON.stringify(req.body, null, 2));

    res.redirect('/register');
});

module.exports = router;
