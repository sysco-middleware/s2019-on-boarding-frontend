//  Enviroment variables
const dotenv = require('dotenv');

dotenv.config();
module.exports = {
    cvPartnerKey: process.env.API_TOKEN,
    cvPartnerURL: process.env.CV_PARTNER_URL,
    camundaURL: process.env.CAMUNDA_URL,
    camundaTestURL: process.env.CAMUNDA_TEST_URL,
    mongourl: process.env.MONGO,
    secret: process.env.SECRET,
    apiUrl: '/api/v1/',
    connectionString: "mongodb://localhost/node-mongo-registration-login-api",
}