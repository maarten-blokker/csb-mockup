var express = require('express');
var router = express.Router();
var api = require('../api');

/* GET home page. */
router.get('/', function (req, res) {
    res.render('register');
});

router.post('/', function (req, res) {


    const isCardMember = +req.body.radioCreditcard;
    const password = Buffer.from(req.body.password).toString('base64');
    const customer = {
        'email': req.body.email,
        'password': password,
        'firstName': req.body.firstName,
        'preposition': req.body.secondName,
        'lastName': req.body.lastName
    };
    if (isCardMember) {
        customer['card'] = {
            'expiryMonth': req.body.expiryMonth,
            'expiryYear': req.body.expiryMonth,
            'cardHolderName': req.body.cardHolderName,
            'cardNumber': +req.body.cardNumber,
            'cvc': +req.body.cvc
        };
    }

    console.log('Registering user: ');
    console.log(JSON.stringify(customer, null, 2));

    api.register(customer, function (err, response) {
        if (err) {
            console.log('Failed to register user: ' + JSON.stringify(err, null, 2));
        } else {
            console.log('Sucessfully registered user: ' + JSON.stringify(response.toJSON(), null, 2));
        }

        res.redirect('/register');
    });
});

module.exports = router;
