//  Enviroment variables
const dotenv = require('dotenv');
var mysql = require('mysql');

dotenv.config();
module.exports = {
    cvPartnerKey: process.env.API_TOKEN,
    cvPartnerURL: process.env.CV_PARTNER_URL,
    camundaURL: process.env.CAMUNDA_URL,
    camundaTestURL: process.env.CAMUNDA_TEST_URL,   

    internalDB: function() {
        var con = mysql.createConnection({
        })
    }
}