var request = require('request');

const api_host = 'ceres-all.sit.debijenkorf.nl';
const api_port = '80';
const path_register = 'http://local.sit.debijenkorf.nl:8090/customer/user/register';

const headers = {
    'User-Agent': 'Mock Agent/0.0.1',
    'Content-Type': 'application/json'
};

module.exports = {
    register: function (customer, callback) {
        var data = JSON.parse(JSON.stringify(customer));
        data['api_version'] = '2.13';

        console.log('sending registration data: ' + JSON.stringify(data, null, 2));

        // Configure the request
        const options = {
            url: path_register,
            method: 'POST',
            headers: headers,
            json: data
        };    

        // Start the request
        request(options, function (error, response, body) {
            if (!error && response.statusCode === 200) {
                callback(null, response);
            } else {
                callback(JSON.parse(body).error, response);
            }
        });
    }
};
