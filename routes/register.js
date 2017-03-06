var express = require('express');
var router = express.Router();
var moment = require('moment');
var api = require('../api');

/* GET home page. */
router.get('/', function (req, res) {
    res.render('register');
});

router.post('/', function (req, res) {
    const password = Buffer.from(req.body.password).toString('base64');
    const birthDate = moment(req.body.birthDate);

    const customer = {
        'email': req.body.email,
        'password': password,
        'firstName': req.body.firstName,
        'preposition': req.body.secondName,
        'lastName': req.body.lastName,
        'gender': req.body.gender,
        'privilegeMember': true,
        'country': req.body.country,
        'companyName': req.body.companyName,
        'phoneHome': req.body.phoneNumber,
        'birthday': birthDate.isValid()
                ? birthDate.format('DD-MM-YYYY')
                : '',
        'address': {
            'country': req.body.country,
            'cityName': req.body.city,
            'postalCode': req.body.postalCode,
            'streetName': req.body.street,
            'number': req.body.houseNumber,
            'numberSuffix': req.body.houseNumberSuffix
        }
    };

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
